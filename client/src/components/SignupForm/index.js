import React from "react";

const SignupForm = ({ username, email, password, passwordConf, handleInputChange, handleFormSubmit , message }) => (
    <form>
        <div className="form-group">
            <label htmlFor="Username">Username</label>
            <input
                className="form-control"
                id="Username"
                type="text"
                value={ username }
                placeholder="Enter Username"
                name="username"
                onChange={ handleInputChange }
                required
            />
            <label htmlFor="Email">Email</label>
            <input
                className="form-control"
                id="Email"
                type="email"
                value={ email }
                placeholder="Enter Email"
                name="email"
                onChange={ handleInputChange }
                required
            />
            <label htmlFor="Password">Password</label>
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
            <label htmlFor="PasswordConf">Re-Enter Password</label>
            <input
                className="form-control"
                id="PasswordConf"
                type="password"
                value={ passwordConf }
                placeholder="Re-Enter Password"
                name="passwordConf"
                onChange={ handleInputChange }
                required
            />
        </div>
        <div className="d-flex justify-content-center">
            <button
                onClick={ handleFormSubmit }
                type="submit"
                className="btn btn-success"
            >Sign Up
            </button>
        </div>
        { message ? (
            <>
                { message.map(msg => (
                    <div className="alert alert-danger mt-3 mb-0" key={ msg }>
                        <span>{ msg }</span>
                    </div>
                )) }
            </>
        ) : <div></div> }
    </form>
);

export default SignupForm;