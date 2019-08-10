import React from "react";
import "./LoginForm.css";

const LoginForm = ({ username, password, handleInputChange, handleFormSubmit, message }) => (
    <form>
        <div className="form-group">
            <label htmlFor="Username">Username</label>
            <input
                className="form-control mb-2"
                id="Username"
                type="text"
                value={ username }
                placeholder="Enter Username"
                name="username"
                onChange={ handleInputChange }
                required
            />
            <label htmlFor="Username">Password</label>
            <input
                className="form-control"
                id="Password"
                type="password"
                value={ password }
                placeholder="Enter Password"
                name="password"
                onChange={ handleInputChange }
                required
            />
        </div>
        <div className="d-flex justify-content-center">
            <button
                onClick={ handleFormSubmit }
                type="submit"
                className="btn btn-success"
            >Login
            </button>
        </div>
        { message.length ? (
            <>
                { message.map(msg => (
                    <div className="alert alert-danger my-2" key={ msg }>
                        <span>{ msg }</span>
                    </div>
                ))}
            </>
        ) : <div></div> }
    </form>
);

export default LoginForm;