import React, { Component } from "react";
import { Col, Row } from "../components/Grid";
import { List } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import ArtistForm from "../components/ArtistForm";
import Card from "../components/Card";
import Artist from "../components/Artist";
import API from "../utils/API";
import "./style.css";
import loading from "../images/loadRipple.gif";

class ArtistSearch extends Component {
    state = {
        artists: [],
        artistName: "",
        message: "Search for your favorite artist!",
        loggedIn: false,
        user: null,
    };

    loading = () => {
        this.setState({
            artists: [],
            message: <img className="img-fluid" src={loading} alt="loading ripple"></img>
        });
    };

    componentDidMount() {
        API.isLoggedIn()
            .then(user => {
                if (user.data.loggedIn) {
                    this.setState({
                        loggedIn: true,
                        user: user.data.user
                    });
                } else {
                    this.setState({
                        loggedIn: false
                    });
                }
            })
            .catch(err => console.log(err));
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
    getArtistInfo = () => {
        this.loading();
        API.getArtistInfo((this.state.artistName || "Mac Miller"))
            .then(res =>
                this.setState({
                    artists: res.data 
                })
            )
            .catch(() =>
                this.setState({
                    artists: [],
                    message: "No artists found, please try again."
                })
            );
    };

    handleFormSubmit = e => {
        e.preventDefault();
        this.getArtistInfo();
    };

    handleSave = id => {
        if (this.state.loggedIn) {
            const artist = this.state.artists.find(artist => artist.artistId === id);
            API.saveFavorite({
                artistId: artist.artistId,
                artistName: artist.artistName,
                label: artist.label,
                genre: artist.genre,
                website: artist.website,
                facebook: artist.facebook,
                twitter: artist.twitter,
                biography: artist.biography,
                country: artist.country ,
                artistThumb: artist.artistThumb ,
                artistLogo: artist.artistLogo,
                artistFanart: artist.artistFanart,
                artistFanart2: artist.artistFanart2,
                artistFanart3: artist.artistFanart3,
                musicVideos: artist.musicVideos
            })
            .then((result) => {
                if (result.data.message) {
                    this.setState({
                        artists: [],
                        message: result.data.message
                    });
                } else {
                    window.location.href = '/favorites'
                }
            });
        } else {
            window.location.href = '/favorites';
        }
    };

    handleClearResults = () => {
        this.setState({
            artists: [],
            message: "Search for your favorite artist!"
        });
    };

    render() {
        document.title = "MuziqueHub | Home";
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
                        { this.state.artists.length ? (
                        <Card title="Artist Results" Button={() => (
                            <button className="btn btn-danger btn-sm ml-auto" onClick={() => this.handleClearResults()}>
                                Clear Results
                            </button>
                        )}>
                            <List>
                                {this.state.artists.map(artist => (
                                    <Artist
                                        key={artist.artistId}
                                        artist={artist.artistName}
                                        label={artist.label}
                                        genre={artist.genre}
                                        website={artist.website}
                                        facebook={artist.facebook}
                                        twitter={artist.twitter}
                                        biography={artist.biography}
                                        country={artist.country}
                                        thumbnail={artist.artistThumb}
                                        logo={artist.artistLogo}
                                        fanart={artist.artistFanart}
                                        fanart2={artist.artistFanart2}
                                        fanart3={artist.artistFanart3}
                                        musicVidLink={artist.musicVideos}
                                        Button={() => (
                                            <button className="btn btn-danger my-3" onClick= { () => this.handleSave(artist.artistId) }>
                                                Save
                                            </button>
                                        )}
                                    >
                                    </Artist>
                                ))}
                            </List>
                        </Card>
                        ) : <h2 className="message text-center">{this.state.message}</h2> }
                    </Col>
                </Row>
            </>
        )
    }
}

export default ArtistSearch;