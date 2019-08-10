import React, { Component } from "react";
import { Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import LoginForm from "../components/LoginForm";
import API from "../utils/API";

class Login extends Component {
    state = {
        loggedIn: false,
        message: "",
        username: "",
        password: "",
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleFormSubmit = e => {
        e.preventDefault();
        this.login();
    }

    login = () => {
        API.login({
            username: this.state.username,
            password: this.state.password
        }).then(user => {
            if (user.data.errors) {
                this.setState({
                    loggedIn: false,
                    message: user.data.errors
                });
            }
            if (user.data.loggedIn) {
                this.props.history.push("/favorites");
            }
            console.log("Login Data: ", user.data);
        }).catch(err => {
            console.log("ERROR:", err);
        });
    }

    render() {
        return (
            <>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Login</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row center>
                    <Col size="md-6">
                        <Card title="Login Form">
                            <LoginForm 
                                handleInputChange={ this.handleInputChange }
                                handleFormSubmit={ this.handleFormSubmit }
                                username={ this.state.username }
                                password={ this.state.password }
                                message= { this.state.message }
                            />
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Login;