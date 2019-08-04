import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";

class Profile extends Component {
    state = {

    };

    render() {
        return (
            <>
                <Navbar />
                <div className="container">
                    <Jumbotron>
                        <h1>Profile</h1>
                    </Jumbotron>
                </div>
            </>
        )
    }
}

export default Profile;