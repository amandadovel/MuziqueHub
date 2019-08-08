import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Artist extends Component {
    state = {
        artistName: ""
    };

    // handleInputChange = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // handleFormSubmit = e => {
    //     e.preventDefault();
    //     this.getAristInfo();    
    // }

    getArtistInfo = () => {
        API.getArtistInfo({
            artistName: this.state.artistName
        })
    }

    render() {
        return (
            <>
                <Jumbotron>
                    <h1>Artist</h1>
                </Jumbotron>
            </>
        )
    }
}

export default Artist;