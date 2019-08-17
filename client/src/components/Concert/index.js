import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./Concert.css"

const Concert = ({ eventId, event, type, eventLink, date, venue, location, performance, Button }) => (
    <ListItem>
        <Row>
            <Col size="md-12">
                <div>
                    {eventId}
                </div>
                <div>
                    {event}
                </div>
                <div>
                    {type}
                </div>

                <div>
                    {date}
                </div>
                <div>
                    {venue}
                </div>
                <div>
                    {location}
                </div>
                {/* <div>
                    {performance}
                </div> */}
                <Button />
            </Col>
        </Row>
    </ListItem>
);

export default Concert;