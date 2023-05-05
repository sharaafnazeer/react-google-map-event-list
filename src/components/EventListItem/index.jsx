import {Col, Divider, Row, Typography} from "antd";
import {RightOutlined} from "@ant-design/icons";
import {Fragment} from "react";

const EventListItem = () => {

    return (
        <Fragment>
            <Row justify="center" align="middle" className="event-card">
                <Col span={4}>
                    <Typography.Title level={3}>11</Typography.Title>
                    <Typography.Title level={5}>Sep</Typography.Title>
                </Col>
                <Col span={18}>
                    <Typography.Title level={3}>Coffee</Typography.Title>
                    <Typography.Text>Place</Typography.Text>
                </Col>
                <Col span={2}>
                    <RightOutlined style={{
                        fontSize: "36px"
                    }}/>
                </Col>
            </Row>
            <Divider/>
        </Fragment>
    )
}

export default EventListItem;