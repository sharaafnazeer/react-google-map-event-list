import {Col, Divider, Row} from "antd";
import React from "react";
import "./styles.css"
import EventListItem from "../EventListItem";
import EventHeader from "../EventHeader";

const EventList = () => {
    return (
        <Row>
            <Col span={12} offset={6}>
                <EventHeader/>
                <Divider/>
                <EventListItem/>
            </Col>
        </Row>
    )
}

export default EventList;