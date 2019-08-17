import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import API from "../../utils/API";
import "./Navbar.css";

class Navbar extends Component  {
    state = {
        message: "",
        loggedIn: false,
        user: null
    };

    componentDidMount() {
        API.isLoggedIn()
            .then(user => {
                if (user.data.loggedIn) {
                    this.setState({
                        message: user.data.user.username,
                        loggedIn: true,
                        user: user.data.user
                    })
                } else {
                    this.setState({
                        message: ""
                    })
                }
            })
            .catch(err => console.log(err));
    };

    logout() {
        API.logout()
            .then((data)=> {
                window.location.pathname = "/"
            }).catch((err)=> {
                console.log(err)
            });
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="d-flex w-100">
                    <div className="navbar-brand">MuziqueHub</div>
                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                    <NavLink className="nav-link" exact to="/Concerts">Concerts</NavLink>
                    <NavLink className="nav-link mr-auto" exact to="/favorites" activeClassName="active">Favorites</NavLink>
                        {this.state.loggedIn ? (
                            <>
                                <div className="nav-message">{this.state.message}</div>
                                <NavLink className="nav-link" onClick={this.logout} to="" activeClassName="active">Logout</NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink className="nav-link" exact to="/login" activeClassName="active">Login</NavLink>
                                <NavLink className="nav-link" exact to="/signup" activeClassName="active">Signup</NavLink>
                            </>
                        )}
                </div>
            </nav>
        );
    }
};

export default Navbar;