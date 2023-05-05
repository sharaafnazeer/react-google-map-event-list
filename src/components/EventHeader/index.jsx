import {Button, Col, Row, Typography} from "antd";
import {PlusCircleOutlined} from "@ant-design/icons";
import React from "react";
import {useNavigate} from "react-router-dom";

const EventHeader = () => {

    const navigate = useNavigate();

    const onAddClick = () => {
        navigate('create');
    }

    return (
        <Row className="heading-btn-align-center">
            <Col>
                <Typography.Title level={2}>EVENTS</Typography.Title>
            </Col>
            <Col>
                <Button onClick={() => onAddClick()} size="large" icon={<PlusCircleOutlined/>} type="primary">Add
                    Event</Button>
            </Col>
        </Row>
    )
}

export default EventHeader;