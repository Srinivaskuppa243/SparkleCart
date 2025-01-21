import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#2C3E50' }}>
            <div className="container-fluid">
                <NavLink className="navbar-brand text-warning fw-bold" to="/">
                    SparkleCart
                </NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/">Home <i className='bi bi-house'></i></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/about">About <i className='bi bi-info-circle'></i> </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/shop">Shop <i className='bi bi-shop'></i> </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/contact">Contact <i className='bi bi-envelope'></i> </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/cart">Cart <i className='bi bi-cart'></i></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
