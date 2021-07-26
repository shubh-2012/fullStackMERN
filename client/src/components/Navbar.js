import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
const Navbar= () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
           
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/About">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/Login">Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/Signup">Register</NavLink>
            </li>
            
            
            </ul>
            
        </div>
        </nav>
                </>
            )
}

export default Navbar