import React from "react";

const LoginForm = ({ username, password, handleInputChange, handleFormSubmit, message }) => (
    <form>
        <div className="form-group">
            <label htmlFor="Username">Username</label>
            <input
                className="form-control mb-2"
                id="Username"
                type="text"
                value={username}
                placeholder="Enter Username"
                name="username"
                onChange={handleInputChange}
                required
            />
            <label htmlFor="Username">Password</label>
            <input
                className="form-control"
                id="Password"
                type="password"
                value={password}
                placeholder="Enter Password"
                name="password"
                onChange={handleInputChange}
                required
            />
        </div>
        <div className="d-flex justify-content-center">
            <button
                onClick={handleFormSubmit}
                type="submit"
                className="btn btn-success"
            >Login
            </button>
        </div>
        {message ? (
            <div className="alert alert-danger text-center mt-3 mb-0">
                <span>{message}</span>
            </div>
        ) : <div></div>}
    </form>
);

export default LoginForm;