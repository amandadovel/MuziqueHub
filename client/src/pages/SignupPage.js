import React, { Component } from "react";
import { Row, Col } from "../components/Grid";
import Card from "../components/Card";
import SignupForm from "../components/SignupForm";
import API from "../utils/API";
import "./style.css";

class Signup extends Component {
    state = {
        loggedIn: false,
        message: "",
        username: "",
        email:"",
        password: "",
        passwordConf: ""
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        this.signup();
    };

    signup = () => {
        API.signup({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            passwordConf: this.state.passwordConf
        })
        .then(user => {
            if (user.data.loggedIn) {
                window.location.href = '/';
            } else {
                this.setState({
                    loggedIn: false,
                    message: user.data.error
                });
            }
        }).catch(err => {
            console.log(err);
        });
    };

    render() {
        document.title = "MuziqueHub | Signup";
        return (
            <>
                <Row center>
                    <Col size="md-6">
                        <Card title="Signup Form">
                            <SignupForm
                                handleInputChange={ this.handleInputChange }
                                handleFormSubmit={ this.handleFormSubmit }
                                username={ this.state.username }
                                email={ this.state.email }
                                password={ this.state.password }
                                passwordConf={ this.state.passwordConf }
                                message={ this.state.message }
                            />
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
};

export default Signup;