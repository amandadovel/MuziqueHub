import React, { Component } from "react";
import { Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Favorites extends Component {
    state = {
        message: "",
        loggedIn: false,
        user: null,
    }

    componentDidMount() {

        API.isLoggedIn()
        .then(user => {
            console.log(user.data);
            if (user.data.loggedIn) {
                this.setState({
                    message: `Welcome ${user.data.user.username}`,
                    loggedIn: true,
                    user: user.data.user
                })
            } else {
                this.setState({
                    message: user.data.message
                })
            }
        })
        .catch(err => console.log(err))
    }

    render() {
        console.log(this.state);
        
        return (
            <>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Favorites</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-8">
                        <h3 className="text-center">{ this.state.message }</h3>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Favorites;