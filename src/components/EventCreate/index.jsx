import {Button, Card, Col, DatePicker, Form, Input, Row} from "antd";
import React from "react";
import dayjs from "dayjs";

const EventCreate = () => {
    const range = (start, end) => {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    };

    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < dayjs().endOf('day');
    };
    const disabledDateTime = () => ({
        disabledHours: () => range(0, 24).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
    });

    return (
        <Row style={{
            marginTop: '2rem'
        }}>
            <Col span={12} offset={6}>
                <Card hoverable>
                    <Form
                        name="event-save-form"
                        labelCol={{span: 8}}
                        wrapperCol={{span: 16}}
                        style={{maxWidth: 600}}
                        initialValues={{}}
                        autoComplete="off"
                        layout="vertical"
                        requiredMark={false}
                    >
                        <Form.Item
                            className="mb-2"
                            label="Event Name"
                            name="name"
                            rules={[{required: true, message: 'Please input your event name!'}]}
                        >
                            <Input size="large"/>
                        </Form.Item>

                        <Form.Item
                            className="mb-2"
                            label="Description"
                            name="description"
                            rules={[{required: true, message: 'Please input your description!'}]}
                        >
                            <Input size="large"/>
                        </Form.Item>

                        <Form.Item
                            className="mb-2"
                            label="Event Date & Time"
                            name="dateTime"
                            rules={[{required: true, message: 'Please input your date and time!'}]}
                        >
                            <DatePicker
                                size="large"
                                format="YYYY-MM-DD HH:mm:ss"
                                disabledDate={disabledDate}
                                disabledTime={disabledDateTime}
                                showTime={{defaultValue: dayjs('00:00:00', 'HH:mm:ss')}}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" size="large">
                                Save Event
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default EventCreate;