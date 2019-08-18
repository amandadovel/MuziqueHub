import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./Concert.css"
import songKickLogo from "../../images/songkickLogo.png"

const Concert = ({ event, type, date, venue, location, Button }) => (
    <ListItem>
        <Row>
            <Col size="md-12">
                <div className="event-title text-center">
                    <h3>{event}</h3>
                    <h5>{type}</h5>
                </div>
                <hr></hr>
            </Col>
        </Row>
        <Row>
            <Col size="md-3">
                <div className="d-flex flex-column text-center justify-content-start h-100 py-2">
                    <h4 className="event-subtitle">Venue?</h4>
                    <h5>{venue}</h5>
                </div>
            </Col>
            <Col size="md-3">
                <div className="d-flex flex-column text-center justify-content-start h-100 py-2">
                    <h4 className="event-subtitle">Where?</h4>
                    <h5>{location}</h5>
                </div>
            </Col>
            <Col size="md-3">
                <div className="d-flex flex-column text-center justify-content-start h-100 py-2">
                    <h4 className="event-subtitle">When?</h4>
                    <h5>{date}</h5>
                </div>
            </Col>
            <Col size="md-3">
                <div className="d-flex flex-column py-2">
                    <Button />
                    <img src={songKickLogo} className="img-fluid w-50 m-auto sk-logo" alt="SongKick" />
                </div>
            </Col>
        </Row>
    </ListItem>
);

export default Concert;