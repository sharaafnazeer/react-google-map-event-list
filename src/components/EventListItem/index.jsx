import {Card, Col, Divider, Row, Typography} from "antd";
import {RightOutlined} from "@ant-design/icons";
import {Fragment} from "react";

const EventListItem = ({event}) => {
    const displayDate = (date) => {
        const splitDate = date.split(", ")
        return splitDate[0].split(" ");
    }
    return (
        <Fragment>
            <Card>
                <Row justify="center" align="middle">
                    <Col span={4}>
                        <Typography.Title level={3}>{displayDate(event.dateTime)[1]}</Typography.Title>
                        <Typography.Title level={5}>{displayDate(event.dateTime)[0]}</Typography.Title>
                    </Col>
                    <Col span={18}>
                        <Typography.Title level={3}>{event.name}</Typography.Title>
                        <Typography.Text>Place</Typography.Text>
                    </Col>
                    <Col span={2}>
                        <RightOutlined style={{
                            fontSize: "36px"
                        }}/>
                    </Col>
                </Row>
            </Card>
            <Divider/>
        </Fragment>
    )
}

export default EventListItem;