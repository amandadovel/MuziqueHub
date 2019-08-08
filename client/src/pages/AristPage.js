import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";

class Concerts extends Component {
    state = {

    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit = e => {

    }

    render() {
        return (
            <>
                <Jumbotron>
                    <h1>Concert</h1>
                </Jumbotron>
            </>
        )
    }
}

export default Concerts;