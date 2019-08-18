import React, { Component } from "react";
import { Col, Row } from "../components/Grid";
import { List } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import ArtistForm from "../components/ArtistForm";
import Card from "../components/Card";
import Concert from  "../components/Concert";
import API from "../utils/API";
import "./style.css";

class ConcertSearch extends Component {
    state = {
        concerts: [],
        artistName: "",
        message: "Search for a Concert!"
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
                    message: "No concert tickets found, please try again."
                })
            );
    };

    handleFormSubmit = e => {
        e.preventDefault();
        this.getSongKickInfo();
    };

    handleClearResults = () => {
        this.setState({
            concerts: []
        });
    };

    render() {
        return (
            <>
              <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center"><strong>Live Performances</strong></h1>
                            <h2 className="text-center">Are they near you soon?</h2>
                        </Jumbotron>
                    </Col>
                </Row> 
                <Row>
                    <Col size="md-12">
                        <Card title="Concert Search">
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
                        {this.state.concerts.length ? (
                        <Card title="Concert Results" Button={() => (
                            <button className="btn btn-danger btn-sm ml-auto" onClick={() => this.handleClearResults()}>
                                Clear Results
                            </button>
                        )}>
                            <List>
                                {this.state.concerts.map(concert => (
                                    <Concert
                                        key={concert.eventId}
                                        event={concert.event}
                                        type={concert.type}
                                        date={concert.date}
                                        venue={concert.venue}
                                        location={concert.location}
                                        Button={() => (
                                                <button className="btn btn-success mt-0 mb-3">
                                                    <a className="event-link" href={concert.eventLink} target="_blank" rel="noopener noreferrer">
                                                        Get Tickets
                                                    </a>
                                                </button>
                                            )}
                                        >
                                    </Concert> 
                                ))}
                            </List>
                        </Card>
                        ) : <h2 className="message text-center">{this.state.message}</h2>}
                    </Col>
                </Row>
            </>
        );
    }
};

export default ConcertSearch;