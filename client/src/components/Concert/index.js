import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./Concert.css"

const Concert = ({ event, type, date, venue, location, Button }) => (
    <ListItem>
        <Row>
            <Col size="md-12">
                <div className="event-title">
                    {event}
                </div>
                <div className="">
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
                <Button />
            </Col>
        </Row>
    </ListItem>
);

export default Concert;