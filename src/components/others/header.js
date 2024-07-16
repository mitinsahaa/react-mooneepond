import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class header extends Component{
    render(){
        return(
            <header>
            <nav className="navbar navbar-expand-lg navbar-light navbar-menu">
                <div className="container">
                    <div className='header-right-logo'>
                    <img className="logo" src='./images/site_logo.jpg' alt="site_logo"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className='header-middle-form'>
                    <form className="search-form">
                        <div className="header-form-field w-100">
                            <input className="form-control form-search w-100" type="search" placeholder="Search" aria-label="Search" />
                        </div>
                    </form>
                </div>
                    <i className="fa fa-user fa-nav-icon"></i>
                    <i class="fa fa-heart-o fa-nav-icon"></i>
                    <i class="fa fa-shopping-cart fa-nav-icon"></i>
                    <i className="fa fa-phone fa-nav-icon"></i>

                    <span className="nav-tel-number p-2"><strong>(03)93389627</strong></span>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <ul className="navbar-nav nav-menus"> 
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/#">Latest Arrival</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Antique Furniture
                                        </a>
                                        
                                        <ul className="dropdown-menu antique-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="/#"><strong>Tables</strong></a></li>
                                            <ul>
                                                <li><a href="/#">Dinnng Tables</a></li>
                                                <li><a href="/#">Console Tables</a></li>
                                                <li><a href="/#">Side Tables</a></li>
                                                <li><a href="/#">Centre Tables</a></li>
                                                <li><a href="/#">Small Tables</a></li>
                                            </ul>
                                            <li><a className="dropdown-item" href="/#"><strong>Bedroom Furniture</strong></a></li>
                                            <ul>
                                                <li><a href="/#">Beds</a></li>
                                                <li><a href="/#">Bedside Cabinets</a></li>
                                                <li><a href="/#">Dressers</a></li>
                                                <li><a href="/#">Screens</a></li>
                                                <li><a href="/#">Chests of Drawers</a></li>
                                            </ul>
                                            <li><a className="dropdown-item" href="/#"><strong>Chest of Drawers & Commodes</strong></a></li>
                                            <ul>
                                                <li><a href="/#">Marble Top Commodes</a></li>
                                                <li><a href="/#">Chests of Drawers</a></li>
                                            </ul>
                                            <li><a className="dropdown-item" href="/#"><strong>Seating</strong></a></li>
                                            <ul>
                                                <li><a href="/#">Dining Chairs</a></li>
                                                <li><a href="/#">Single Chairs</a></li>
                                                <li><a href="/#">Armchairs</a></li>
                                                <li><a href="/#"> Settees & Suites</a></li>
                                                <li><a href="/#">Footstools</a></li>
                                            </ul>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ART
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="/#">Action</a></li>
                                            <li><a className="dropdown-item" href="/#">Another action</a></li>
                                            <li><a className="dropdown-item" href="/#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Home Decor
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="/#">Action</a></li>
                                            <li><a className="dropdown-item" href="/#">Another action</a></li>
                                            <li><a className="dropdown-item" href="/#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Antiques Accessories
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item" href="/#">Action</a></li>
                                            <li><a className="dropdown-item" href="/#">Another action</a></li>
                                            <li><a className="dropdown-item" href="/#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact-us">Contact Us</NavLink>
                                    </li>
                                    <ul className="nav-item">
                                        <li className="navbar-nav">
                                            <a className="nav-link" href="/#">Sold</a>
                                            <a className="nav-link" href="/#" style={{ color: "red" }}>SALE</a>
                                        </li>
                                    </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            </header>
        )
    }
}

export default header;