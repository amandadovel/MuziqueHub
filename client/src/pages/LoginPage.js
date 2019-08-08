import React, { Component } from "react";
import { Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import LoginForm from "../components/LoginForm";

class Login extends Component {
    state = {
        username: "",
        password: ""
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
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
                <Row>
                    <Col size="md-12">
                        <div className="w-50 m-auto">
                            <Card title="Login Form">
                                <LoginForm 
                                    handleInputChange={ this.handleInputChange }
                                    handleFormSubmit={ this.handleFormSubmit }
                                    username={ this.state.username }
                                    password={ this.state.password }
                                />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Login;