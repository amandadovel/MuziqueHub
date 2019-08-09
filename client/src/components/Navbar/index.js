import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg fixed-top">
        <div className="d-flex">
            <div className="navbar-brand">Music App</div>
            <NavLink className="nav-link" exact to="/">Home</NavLink>
            <NavLink className="nav-link" exact to="/favorites" activeClassName="active">Favorites</NavLink>
            <NavLink className="nav-link" exact to="/login" activeClassName="active">Login</NavLink>
            <NavLink className="nav-link" exact to="/signup" activeClassName="active">Signup</NavLink>
        </div>
    </nav>
)

export default Navbar;