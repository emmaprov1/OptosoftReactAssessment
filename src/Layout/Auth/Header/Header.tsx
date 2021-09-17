import React from 'react'
import authService from '../../../Services/authService';

const Header = () => {
  const logout = () => {
    authService.logoutUser().then((res: any) => {
      localStorage.removeItem('__session_op');
      window.location.href = "/";
    }, (error: { message: any; }) => {
      console.log(error.message)
    })
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-white shadow-sm fixed-top">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
            <img src="https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
            <span className=" text-dark pl-1">OptoSoft test</span>
            <span className="menu-collapsed pl-1">OptoSoft</span>
        </a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link text-secondary" href="">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-secondary" href="">Order</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-secondary" href="" onClick={() => logout}><i className="fa fa-power-off"></i> </a>
                </li>

                <li className="nav-item dropdown d-sm-block d-md-none">
                    <a className="nav-link dropdown-toggle" href="#" id="smallerscreenmenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Menu </a>
                    <div className="dropdown-menu" aria-labelledby="smallerscreenmenu">
                        <a className="dropdown-item" href="#top">Dashboard</a>
                        <a className="dropdown-item" href="#top">Profile</a>
                        <a className="dropdown-item" href="#top">Tasks</a>
                        <a className="dropdown-item" href="#top">Etc ...</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header
