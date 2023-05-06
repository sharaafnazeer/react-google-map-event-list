import {Button, Card, Col, DatePicker, Form, Input, Row} from "antd";
import React, {useState} from "react";
import dayjs from "dayjs";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {saveEvent} from "../../store/slices/eventSlice";
import MapContainer from "../MapContainer";

const localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

const EventCreate = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector((state) => state.event.isLoading);
    const [markers, setMarkers] = useState([]);
    const [form] = Form.useForm();

    const onMapClick = (ev) => {
        setMarkers([{lat: ev.lat, lng: ev.lng}])
    }

    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < dayjs().endOf('day');
    };

    const onFinish = (values) => {

        if (!markers.length) {
            form.setFields([
                {
                    name: 'placeLatLng',
                    errors: ['Please select an event place'],
                },
            ]);
            return;
        } else {
            form.setFields([
                {
                    name: 'placeLatLng',
                    errors: [],
                },
            ]);
        }

        const data = {
            ...values,
            placeLat: markers[0].lat,
            placeLng: markers[0].lng,
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
                        form={form}
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

                        <Form.Item
                            name="placeLatLng"
                            className="mb-2"
                        >
                            <MapContainer markers={markers} onMapClick={onMapClick}/>
                        </Form.Item>

                        <Form.Item>
                            <Button loading={isLoading} type="primary" htmlType="submit" size="large">
                                Save Event
                            </Button>
                            <Button loading={isLoading} type="link" onClick={() => navigate(-1)}>Back</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default EventCreate;