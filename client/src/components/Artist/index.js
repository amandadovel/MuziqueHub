import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";

const Artist = ({ artist, label, genre, website, facebook, twitter, biography, country, thumbnail, logo, fanart, fanart2, fanart3 }) => (
    <ListItem>
        <Row className="flex-wrap-reverse">
            <Col size="md-12">

                { logo ? (
                <img src={logo} className="logo mx-auto d-block" alt="logo"></img>
                ) : <div></div> }

                <h1 className="artist-name text-center mt-3">{artist}</h1>
                <div className="font-italic text-center">
                    <small>{country}</small>
                </div>
                <br></br>

                <h2 className="genre text-center">{genre}</h2>
                <br></br>

                { label ? (
                <h3 className="record-label text-center">Record Label: {label}</h3>
                ): <div></div> }
                <br></br>

                <div className="media-links d-flex justify-content-around">
                    <a target="_blank" rel="noopener noreferrer" href={website}>Website</a>
                    <a target="_blank" rel="noopener noreferrer" href={facebook}>Facebook</a>
                    <a target="_blank" rel="noopener noreferrer" href={twitter}>Twitter</a>
                </div>
                <br></br>

                <img src={thumbnail} alt="thumbnail" className="img-fluid rounded mx-auto d-block"></img>
                <br></br>

                <p className="biography">{biography}</p>

                <img src={fanart} alt="fanart" className="img-fluid rounded mt-4"></img>
                <img src={fanart2} alt="fanart2" className="img-fluid rounded mt-4"></img>
                <img src={fanart3} alt="fanart3" className="img-fluid rounded mt-4"></img>
                
            </Col>
        </Row>
    </ListItem>
)
        
export default Artist