import React from "react";
// import axios from "axios";
import Jumbotron from "../components/Jumbotron";
import { Col, Row } from "../components/Grid";


class ImageUpload extends React.Component {
    state = {
        url: "",
        photo: null,
        photoName: ""
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    getFile = e => {
        this.setState({
            photo: e.target.files[0]
        })
        console.log("files", e.target.files);
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("Click");
        document.querySelector("#fileUpload").reportValidity();
        let payload = new FormData();
        payload.append("file", this.state.photo);
        payload.append("photoName", this.state.photoName);
        console.log("state", this.state);
        fetch("http://localhost:3001/api/image/upload", {
            method: "POST",
            body: payload,
            credentials: "include",
            mode: "cors"
        })
            .then(res => res.json())
            .then(response => {
                console.log("Response: ", response);
                this.setState({
                    url: response
                })
            }).catch(err => {
                console.log("error", err);
            })
    }

    render() {
        return (
            <>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center">
                                <strong>Artist Search</strong>
                            </h1>
                            <h2 className="text-center start-message">Search and save the artists you love!</h2>
                        </Jumbotron>
                    </Col>
                </Row>

                <form id="fileUpload">
                    <label>Select an image</label>
                    <input type="file" required name="photo" onChange={this.getFile} />

                    <label>Name your image</label>
                    <input type="text" required name="photoName" onChange={this.handleInputChange} />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </>
        );
    }

}

export default ImageUpload;