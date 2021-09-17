import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="col-md-2 p-0">
        <div className="side-menu-content d-none d-md-block mt-5">
            <div className="side-menu shadow-sm w-100 pt-5">
                <div id="sidebar-container" className="sidebar-expanded">
                    <ul className="list-group">
                        <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                            <small>MAIN MENU</small>
                        </li>
                        <a href="#submenu1" data-toggle="collapse" aria-expanded="false" className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-start align-items-center">
                                <span className="fa fa-home mr-3"></span>
                                <span className="menu-collapsed">Dashboard</span>
                            </div>
                        </a>
                        <a href="#submenu2" data-toggle="collapse" aria-expanded="false" className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-start align-items-center">
                                <span className="fa fa-shopping-cart  fa-fw mr-3"></span>
                                <span className="menu-collapsed">Orders</span>
                                <span className="submenu-icon ml-auto"></span>
                            </div>
                        </a>
                        <div id='submenu2' className="collapse sidebar-submenu">
                            <a href="#" className="list-group-item list-group-item-action">
                                <span className="menu-collapsed">New order</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                <span className="menu-collapsed">Pending order</span>
                            </a>
                        </div>
                        <a href="#" className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-start align-items-center">
                                <span className="fa fa-tasks fa-fw mr-3"></span>
                                <span className="menu-collapsed">Tasks</span>
                            </div>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <div className="d-flex w-100 justify-content-start align-items-center">
                                <span className="fa fa-question fa-fw mr-3"></span>
                                <span className="menu-collapsed">Help</span>
                            </div>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
