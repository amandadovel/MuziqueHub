import React, { Component } from "react";
import { Col, Row } from "../components/Grid";
import { List } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import ArtistForm from "../components/ArtistForm";
import LocationForm from "../components/LocationForm";
import Card from "../components/Card";
import Concert from  "../components/Concert";
import API from "../utils/API";
import "./style.css";
import loading from "../images/loadRipple.gif";

class ConcertSearch extends Component {
    state = {
        concerts: [],
        artistName: "",
        location: "",
        message: "Search for a Concert!",
    };

    componentWillMount() {
        document.title = "MuziqueHub | Concerts";
    };

    loading = () => {
        this.setState({
            concerts: [],
            message: <img className="img-fluid" src={loading} alt="loading ripple"></img>
        });
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    artistSearch = () => {
        this.loading();
        API.songkickArtistSearch(this.state.artistName)
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

    locationSearch = () => {
        this.loading();
        API.songkickLocationSearch(this.state.location)
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

    handleArtistSubmit = e => {
        e.preventDefault();
        this.artistSearch();
    };

    handleLocationSubmit = e => {
        e.preventDefault();
        this.locationSearch();
    };

    handleClearResults = () => {
        this.setState({
            concerts: [],
            message: "Search for a Concert!"
        });
    };

    render() {
        return (
            <>
              <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center px-2"><strong>Live Performances</strong></h1>
                            <h2 className="text-center px-2">Are they near you soon?</h2>
                        </Jumbotron>
                    </Col>
                </Row> 
                <Row>
                    <Col size="md-6">
                        <Card title="Search by Artist">
                            <ArtistForm
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleArtistSubmit}
                                artistName={this.state.artistName}
                            />
                        </Card>
                    </Col>
                    <Col size="md-6">
                        <Card title="Search by Location">
                            <LocationForm
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleLocationSubmit}
                                location={this.state.location}
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