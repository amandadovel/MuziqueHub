import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./Artist.css"

const Artist = ({ artist, label, genre, website, facebook, twitter, biography, country, thumbnail, logo, fanart, fanart2, fanart3, Button, musicVidLink }) => (
    <ListItem>
        <Row className="flex-wrap-reverse">
            <Col size="md-12">
                {logo ? (
                    <img src={logo} className="logo img-fluid mx-auto d-block" alt="logo"></img>
                ) : <div></div>}

                <h1 className="artist-name text-center mt-3">{artist}</h1>

                <div className="font-italic text-center">
                    <small>{country}</small>
                </div>
                <br></br>

                <h2 className="genre text-center">{genre}</h2>
                <br></br>

                {label ? (
                    <h3 className="record-label text-center">Record Label: {label}</h3>
                ) : <div></div>}
                <br></br>
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
                <div className="media-links d-flex justify-content-around">
                    <a className="links" target="_blank" rel="noopener noreferrer" href={website}>Website</a>
                    <a className="links" target="_blank" rel="noopener noreferrer" href={facebook}>Facebook</a>
                    <a className="links" target="_blank" rel="noopener noreferrer" href={twitter}>Twitter</a>
                </div>
                <br></br>
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
                <img src={thumbnail} alt="thumbnail" className="img-fluid rounded mx-auto d-block"></img>
                <br></br>
                <p className="biography">{biography}</p>
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
                {fanart ? (
                    <img src={fanart} alt="fanart" className="img-fluid rounded mt-4"></img>
                ) : <div></div>}
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
                {fanart2 ? (
                    <img src={fanart2} alt="fanart" className="img-fluid rounded mt-4"></img>
                ) : <div></div>}
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
                {fanart3 ? (
                    <img src={fanart3} alt="fanart" className="img-fluid rounded mt-4"></img>
                ) : <div></div>}
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
                {musicVidLink ? (
                    <div className ="d-flex flex-wrap justify-content-center">
                        {musicVidLink.map(item => (
                            <iframe className="p-2 my-3 mx-1" src={item.vidLink} title="myframe" key={item.vidId} allowFullScreen={true}></iframe>
                        ))}
                    </div>
                ) : <div></div>}
              
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
                <div className="text-center">
                    <Button />
                </div>
            </Col>
        </Row>
    </ListItem>
);

export default Artist;