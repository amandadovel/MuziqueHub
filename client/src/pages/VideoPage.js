import React, { Component } from "react";
import { Col, Row } from "../components/Grid";
// import { List } from "../components/List";
import Jumbotron from "../components/Jumbotron";
// import VideoForm from "../components/VideoForm";
// import Card from "../components/Card";
// import Artist from "../components/Artist";
// import API from "../utils/API";

class VideoSearch extends Component {
    state = {

    };

    render() {
        return (
            <>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center">
                                <strong>Video Search</strong>
                            </h1>
                            <h2 className="text-center">Search and save music videos!</h2>
                        </Jumbotron>
                    </Col>
                </Row>
            </>
        )
    }


}

export default VideoSearch;