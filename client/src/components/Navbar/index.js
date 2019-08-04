import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg fixed-top">
        <div className="d-flex">
            <NavLink className="navbar-brand" exact to="/">Music App</NavLink>
            <NavLink className="nav-link" exact to="/login" activeClassName="active">Login</NavLink>
            <NavLink className="nav-link" exact to="/signup" activeClassName="active">Signup</NavLink>
        </div>
    </nav>
)

export default Navbar;