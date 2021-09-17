import React, { useEffect, useState } from 'react'
import "./Login.scss"
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import authService from '../../../../Services/authService';
import firebase from './../../../../Services/firebaseInitService'
import { useLoggedInUser } from '../../../../Hooks';

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [submit, setSubmit] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = handleSubmit((data:{email: string, password: string}) => processLogin(data));

  useEffect(() => {
    const userObject = useLoggedInUser()
    if (userObject !== null) {
      return () => {
        window.location.href = "/dashboard";
      }
    }
  }, [])

  const processLogin = (data:{email: string, password: string}) => {
    setSubmit(true)
    authService.loginClient(data).then((user:any) => {
      firebase.auth().onAuthStateChanged((user:any) => {
        if (user) {
          user.getIdToken().then((idToken:any) => {
            // get user details after login
            console.log("User details", user)
            localStorage.setItem('__session_op', JSON.stringify({
              uid: user.uid,
              email: user.email,
              r_token: user.refreshToken,
              token: idToken,
            }));
            window.location.href = "/#/dashboard";
          });
        } else {
          // ser is signed out or not available
          console.log('error created')
        }
      });
    }, (error:any) => {
      console.log(error)
      toast.error(error.message, { duration: 20000, className: 'bg-danger text-white' });
      setSubmit(false)
    })
  }
  return (
        <div className="login">
            <main>
                <div className="container">
                    <div className="login-inner">
                      <div className="row h-100">
                        <div className="col-md-9 offset-md-2 mt-5 m-auto emp-login-container">
                            <div className="row h-100 p-3 w-100">
                                <div className="col-md-6">
                                  <div className="w-100 p-5"><h2>Login</h2></div>
                                    <div className="emp-login emp-login2 w-100 px-5 pb-5">
                                        <form className="w-100" onSubmit={onSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="email">Email address</label>
                                                <input type="email" className="form-control rounded" id="email" {...register("email", { required: "field cannot be empty" })} aria-describedby="emailHelp" placeholder="Enter email"/>
                                                <div className="text-danger"> {errors.email && errors.email.message} </div>
                                            </div>
                                            <div className="form-group pasword-input">
                                                <label htmlFor="password">Password</label>
                                                <input type="password" className="form-control rounded" id="password" {...register("password", { required: "field cannot be empty" })} placeholder="Password"/>
                                                <span><i className="fa fa-eye"></i></span>
                                                <div className="text-danger">{errors.password && errors.password.message}</div>
                                            </div>
                                            <p className="p-0 m-0">Dont have an account? <a href="/#/register">register now</a></p>
                                            <div className="form-check  pt-4">
                                                <label className="emp-chk-container">  Keep me logged in
                                                <input type="checkbox" checked={true} className="m-5 pt-4"/>
                                                <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            {!submit && (<button type="submit" className="btn rounded-0 w-100">Login</button>)}
                                            {submit && (<button type="submit" className="btn rounded-0 w-100 btn--dark" disabled>
                                                Please wait
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            </button>)}
                                        </form>
                                    </div>
                               </div>
                                <div className="col-md-6 login-right my-auto mx-auto text-center d-flex justify-content-center align-items-center">
                                    <div className="">
                                        <h1>Optosoft Test</h1>
                                        <img src="/asset/images/senateandrep.png" className="nass-logo" alt=""/>
                                    </div>
                                </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <div>
                    <div className=" emp-footer-inner shadow bg-light text-center py-2 text-dark fixed-bottom ">
                        &copy; 2021 | Optosoft Test. All Rights Reserved.

                    </div>
                </div>
            </footer>
            <Toaster/>
        </div>
  )
}

export default Login
