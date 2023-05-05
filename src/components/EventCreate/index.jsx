import {Button, Card, Col, DatePicker, Form, Input, Row} from "antd";
import React from "react";
import dayjs from "dayjs";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {saveEvent} from "../../store/slices/eventSlice";

const localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

const EventCreate = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector((state) => state.event.isLoading);

    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < dayjs().endOf('day');
    };

    const onFinish = (values) => {
        const data = {
            ...values,
            dateTime: dayjs(values.dateTime).format('lll')
        }
        dispatch(saveEvent(data))
            .unwrap()
            .then(() => {
                navigate('/');
            })
            .catch(() => {
            });
    }

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
                        onFinish={onFinish}
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
                                showTime={{defaultValue: dayjs('00:00:00', 'HH:mm:ss')}}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button loading={isLoading} type="primary" htmlType="submit" size="large">
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