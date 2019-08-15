import React, { Component } from "react";
import axios from "axios";
import Jumbotron from "../components/Jumbotron";
import { Col, Row } from "../components/Grid";

class ImageUpload extends Component {
    constructor() {
        super();
        this.state = {
            file: null
        };
    }

    submitImage = e => {
        e.preventDefault();
        console.log('in function');
        const formData = new FormData();
        formData.append("file", this.state.file[0]);
        console.log('form data', formData)
        axios.post("/api/image/upload", formData, {
            headers: {
                'Content-Type': "multipart/form-data"
            }
        }).then(res => {
            console.log('success', res);
        }).catch(err => {
            console.log('error', err);
        });
    }

    handleImageUpload = e => {
        this.setState({ file: e.target.files });
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

                <form onSubmit={this.submitImage}>
                    <input label="upload image" type="file" onChange={this.handleImageUpload} />
                    <button type="submit">Send</button>
                </form>
            </>
        );
    }

}

export default ImageUpload;