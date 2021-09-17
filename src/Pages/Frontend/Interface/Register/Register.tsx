import React, { useState } from 'react'
import "./../Login/Login.scss"
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import authService from '../../../../Services/authService';

const Register = () => {
  // eslint-disable-next-line no-unused-vars
  const [submit, setSubmit] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = handleSubmit((data:{email: string, password: string}) => processSignup(data));

  const processSignup = async (data:{email: string, password: string}) => {
    setSubmit(true)
    try {
      await authService.createUserAccount(data).then((res:any) => {
        // console.log("LOGG IN CRED", res)
        setSubmit(false)
        toast.success('Account created succesfully', { duration: 20000, className: 'bg-success text-white' });
        window.location.href = "/";
      }, (error) => {
        toast.error(error.message, { duration: 20000, className: 'bg-danger text-white' });
        console.log(error.message)
        setSubmit(false)
      })
    } catch (error: any) {
      toast.error(error.message, { duration: 20000, className: 'bg-danger text-white' })
      console.log(error.message)
      setSubmit(false)
    }
  }
  return (
        <div className="login">
            <main>
                <div className="container">
                    <div className="login-inner">
                      <div className="row h-100">
                        <div className="col-md-9 offset-md-2 mt-5 m-auto emp-login-container">
                            <div className="row h-100 p-3 w-100">
                                <div className="col-md-6 pt-5">
                                  <div className="w-100 px-5"><h2>Register</h2></div>
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
                                            <p> Have an account? <a href="/">login now</a></p>

                                            {!submit && (<button type="submit" className="btn rounded-0 w-100">Register</button>)}
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

export default Register
