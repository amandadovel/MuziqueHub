import React, { Component } from "react";
import { Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import SignupForm from "../components/SignupForm";
import API from "../utils/API";

class Signup extends Component {
    state = {
        username: "",
        email:"",
        password: "",
        passwordConf: ""
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleFormSubmit = e => {
        e.preventDefault();
        this.signup();
    }

    signup = () => {
        API.signup({
            email: this.state.email,
            password: this.state.password
        })
        .then(user => {
            console.log("User: ", user);
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        console.log(this.state);
        
        return (
            <>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Signup</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <div className="w-50 m-auto">
                            <Card title="Signup Form">
                                <SignupForm
                                    handleInputChange={ this.handleInputChange }
                                    handleFormSubmit={ this.handleFormSubmit }
                                    username={ this.state.username }
                                    email={ this.state.email }
                                    password={ this.state.password }
                                    passwordConf={ this.state.passwordConf }
                                />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Signup;