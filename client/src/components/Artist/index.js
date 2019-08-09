import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";

const Artist = ({ artist, label, genre, website, facebook, twitter, biography, country, thumbnail, logo, fanart }) => (
    <ListItem>
        <Row className="flex-wrap-reverse">
            <Col size="md-8">

                { logo ? (
                <img src={logo} alt="logo"></img>
                ) : <div></div> }

                <h1 className="artist-name">{artist}</h1>
                <small className="font-italic">{country}</small>

                { label ? (
                <h2 className="record-label">Record Label: {label}</h2>
                ): <div></div> }

                <h2 className="genre">{genre}</h2>
                <a target="_blank" rel="noopener noreferrer" href={website}>Website</a>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href={facebook}>Facebook</a>
                <br></br>
                <a target="_blank" rel="noopener noreferrer" href={twitter}>Twitter</a>
                <br></br>
                <p className="biography">{biography}</p>
                <img className="img-fluid" src={thumbnail} alt="thumbnail"></img>
                <img className="img-fluid" src={fanart} alt="fanart"></img>
            </Col>
        </Row>
    </ListItem>
)
        
export default Artist