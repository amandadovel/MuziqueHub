import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import API from "../../utils/API";
import "./Navbar.css";

class Navbar extends Component {
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
                    });
                } else {
                    this.setState({
                        message: ""
                    });
                }
            })
            .catch(err => console.log(err));
    }
    logout() {
        API.logout()
            .then(data => {
                window.location.pathname = "/";
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        console.log(this.state);

        return (
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="d-flex w-100">
                    <div className="svg-wrapper pr-3">
                        <svg version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            width="50px"
                            height="50px"
                            viewBox="0 0 468.859 468.859"
                            xmlSpace="preserve"
                        >
                            <g>
                                <path
                                    className="outer-headphone"
                                    fill="white"
                                    d="M235.554,0C109.784,0,3.532,102.367,3.532,223.536c0,68.314,33.927,149.905,86.43,207.865l1.484,1.639l2.164-0.429
		c0.553-0.1,12.578-2.637,17.603-11.834c12.317,10.095,23.253,11.085,34.757,6.961c5.115,9.843,7.103,20.559-6.606,24.445
		c-12.906,3.675-30.152-1.094-42.886-3.025c-21.219-3.222-66.178-4.156-87.61-3.358c-10.092,0.381-10.128,16.082,0,15.701
		c25.874-0.958,74.494,1.606,100.092,5.241c12.808,1.82,29.16,4.341,41.437-1.623c21.209-10.303,17.637-27.875,9.105-44.146
		c6.404-3.907,13.235-8.844,20.638-14.15c-20.528-9.017-47.406-49.355-65.764-84.528c-12.99-24.902-38.401-77.676-35.536-104.35
		c-15.867,10.896-28.212,20.386-34.91,32.837c-1.854-11.745-2.852-23.271-2.852-34.43c0-96.018,100.557-160.516,194.469-160.516
		c116.331,0,194.46,83,194.46,160.516c0,11.093-0.897,22.456-2.625,33.953c-6.744-12.219-18.987-21.612-34.652-32.36
		c2.869,26.674-22.537,79.447-35.533,104.35c-18.351,35.173-45.236,75.52-65.762,84.528c28.204,20.238,47.103,34.46,72.189,11.085
		c5.133,7.975,14.463,12.158,14.939,12.359l2.601,1.117l1.884-2.115c51.359-57.743,84.528-138.493,84.528-205.742
		C467.575,102.357,361.322,0,235.554,0z"
                                />
                                <path className="circle" fill="white" d="M93.646,209.917c-0.99,0-1.863,0.232-2.673,0.589c-0.287,0.126-0.601,0.218-0.87,0.391
                                    c-11.407,7.468,3.939,55.427,31.244,107.756c24.917,47.752,53.217,82.208,66.652,82.208c0.25,0,0.475-0.072,0.713-0.092
                                    c0.988-0.108,1.923-0.353,2.725-0.878c0.878-0.581,1.569-1.479,2.166-2.528c0.03-0.061,0.062-0.145,0.092-0.204
                                    c6.885-12.788-5.973-57.491-31.038-105.532C137.771,243.93,107.46,209.909,93.646,209.917z"
                                />

                                <path
                                    className="circle"
                                    fill="white"
                                    d="M350.25,318.652c27.303-52.329,42.647-100.296,31.242-107.756c-0.269-0.172-0.585-0.265-0.874-0.391
		c-0.806-0.356-1.679-0.589-2.669-0.589c-13.806,0-44.126,34.013-69.012,81.709c-25.062,48.049-37.926,92.756-31.041,105.536
		c0.031,0.063,0.067,0.14,0.1,0.2c0.589,1.058,1.286,1.964,2.16,2.528c0.821,0.537,1.771,0.798,2.785,0.89
		c0.213,0.024,0.421,0.093,0.657,0.093C297.023,400.873,325.328,366.404,350.25,318.652z"
                                />

                                <path
                                    className="music-note"
                                    fill="white"
                                    d="M247.696,93.629c-8.111-1.381-14.741,4.59-14.741,12.818v84.997c-4.795-1.759-9.959-2.771-15.371-2.771
		c-24.697,0-44.715,20.019-44.715,44.721c0,24.693,20.018,44.711,44.715,44.711c18.098,0,33.662-10.748,40.691-26.205
		c3.414-7.481,3.903-20.99,3.936-29.212c0.092-26.299,0.092-78.205,0.092-78.205c57.771,0,54.309,34.622,47.545,54.505
		c-2.646,7.789-1.07,9.091,4.496,3.032C384.842,125.226,286.681,100.264,247.696,93.629z"
                                />
                            </g><g /><g /><g /><g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                            <g />
                        </svg>
                    </div>
                    <div className="navbar-brand">Music App</div>
                    <NavLink className="nav-link" exact to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-link" exact to="/Concerts">
                        Concerts
                    </NavLink>
                    <NavLink
                        className="nav-link mr-auto"
                        exact
                        to="/favorites"
                        activeClassName="active"
                    >
                        Favorites
                    </NavLink>
                    {this.state.loggedIn ? (
                        <>
                            <div className="nav-message">
                                {this.state.message}
                            </div>
                            <NavLink
                                className="nav-link"
                                onClick={this.logout} to=""
                                activeClassName="active"
                            >
                                Logout
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink
                                className="nav-link"
                                exact
                                to="/login"
                                activeClassName="active"
                            >
                                Login
                            </NavLink>
                            <NavLink
                                className="nav-link"
                                exact
                                to="/signup"
                                activeClassName="active"
                            >
                                Signup
                            </NavLink>
                        </>
                    )}
                </div>
            </nav>
        );
    }
}

export default Navbar;
