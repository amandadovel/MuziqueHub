import React, { Component } from "react";
import { Col, Row } from "../components/Grid";
import { List } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import ArtistForm from "../components/ArtistForm";
import Card from "../components/Card";
import Artist from "../components/Artist";
import API from "../utils/API";

class ArtistSearch extends Component {
    state = {
        artists: [],
        artistName: "",
        message: "Search for your favorite artist to begin!"
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    getArtistInfo = () => {
        API.getArtistInfo(this.state.artistName)
            .then(res =>
                this.setState({
                    artists: res.data 
                })
            )
            .catch(() =>
                this.setState({
                    artists: [],
                    message: "No artists found, please try again"
                })
            );
    };

    handleFormSubmit = e => {
        e.preventDefault();
        this.getArtistInfo();
    };

    render() {
        return (
            <>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center">
                                <strong>Artist Search</strong>
                            </h1>
                            <h2 className="text-center">Search and save the artists you love!</h2>
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
                        { this.state.artists ? (
                        <Card title="Results">
                            <List>
                                { this.state.artists.map(artist => (
                                    <Artist
                                        key={artist.idArtist}
                                        artist={artist.strArtist}
                                        label={artist.strLabel}
                                        genre={artist.strGenre}
                                        website={artist.strWebsite}
                                        facebook={artist.strFacebook}
                                        twitter={artist.strTwitter}
                                        biography={artist.strBiographyEN}
                                        country={artist.strCountry}
                                        thumbnail={artist.strArtistThumb}
                                        logo={artist.strArtistLogo}
                                        fanart={artist.strArtistFanart}
                                        fanart2={artist.strArtistFanart2}
                                        fanart3={artist.strArtistFanart3}
                                    >
                                    </Artist>
                                )) }
                            </List>
                        </Card>
                        ):  <h2 className="text-center">{this.state.message}</h2> }
                    </Col>
                </Row>
            </>
        )
    }
}

export default ArtistSearch;