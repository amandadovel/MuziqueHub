import React, { Component } from "react";
import { Col, Row } from "../components/Grid";
import { List } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import ArtistForm from "../components/ArtistForm";
import Card from "../components/Card";
import Concert from  "../components/Concert";
import API from "../utils/API";

class ConcertSearch extends Component {

    state = {
        concerts: [],
        artistName: "",
        message: "Search for a Concert"
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    getSongKickInfo = () => {
        API.getSongKickInfo(this.state.artistName)
            .then(res =>
               this.setState({
                    concerts: res.data 
                })
            )
            .catch(() =>
                this.setState({
                    concerts: [],
                    message: "No Concert Information Found"
                })
            );
    };

    handleFormSubmit = e => {
        e.preventDefault();
        this.getSongKickInfo();
    };


    render() {
        console.log(this.state);
        
        return (
            <>
              <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center">
                                <strong>Live Performances</strong>
                            </h1>
                            <h2 className="text-center start-message">Are they near you soon?</h2>
                        </Jumbotron>
                    </Col>
                </Row> 
                <Row>
                    <Col size="md-12">
                        <Card title="Artist Search">
                            <ArtistForm
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                                artistName={this.state.artistName}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        { this.state.concerts.length ? (
                        <Card>
                            <List>
                                { this.state.concerts.map(concert => (
                                    <Concert
                                        key={concert.eventID}
                                        event={concert.event}
                                        type={concert.type}
                                        eventLink={concert.eventLink}
                                        date={concert.date}
                                        venue={concert.venue}
                                        location={concert.location}
                                        performance={concert.performance}
                                        >
                                    </Concert> 
                                ))}

                            </List>
                        </Card>
                            
                        ) : <h2 className="text-center">{this.state.message}</h2>}

                    </Col>
                </Row>


            </>
        )
    }
}

export default ConcertSearch;