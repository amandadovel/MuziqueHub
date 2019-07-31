import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";

class Home extends Component {
    state = {

    };

    render() {
        return (
            <div className="container">
                <Jumbotron>
                    <h1>Home</h1>
                </Jumbotron>
            </div>
        )
    }
}

export default Home;