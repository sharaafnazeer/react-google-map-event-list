import MapContainer from "../MapContainer";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getEventById} from "../../store/slices/eventSlice";
import {Button, Card, Col, Divider, Empty, Row, Typography} from "antd";
import Loader from "../Loader";
import {useNavigate, useParams} from "react-router-dom";
import dayjs from "dayjs";
import {ClockCircleOutlined} from "@ant-design/icons";

const EventView = () => {

    const selectedEvent = useSelector((state) => state.event.selectedEvent);
    const isLoading = useSelector((state) => state.event.isLoading);
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getEventById(params.id))
            .unwrap()
            .then(() => {
            })
            .catch(() => {
            });
    }, [dispatch, params?.id]);

    return (
        <Row style={{
            marginTop: '2rem'
        }}>
            <Col span={12} offset={6}>
                <Card hoverable>

                    {
                        isLoading ? (
                            <Loader/>
                        ) : (
                            <>
                                {
                                    selectedEvent ? (
                                        <div>
                                            <Typography.Title level={3}>{selectedEvent.name}</Typography.Title>
                                            <Typography.Text>{selectedEvent.description}</Typography.Text>

                                            <Typography.Title level={5}><ClockCircleOutlined/>
                                                 {` ${selectedEvent.dateTime}`}</Typography.Title>

                                            <Divider/>

                                            <MapContainer onMapClick={null} markers={[{
                                                lat: selectedEvent.placeLat,
                                                lng: selectedEvent.placeLng
                                            }]}/>

                                            <Typography.Text>Created
                                                On: {dayjs(selectedEvent.createdAt).format('lll')}</Typography.Text>

                                            <Divider/>

                                            <Button loading={isLoading} type="link"
                                                    onClick={() => navigate(-1)}>Back</Button>
                                        </div>
                                    ) : (
                                        <Empty/>
                                    )
                                }
                            </>
                        )
                    }

                </Card>
            </Col>
        </Row>
    )

}
export default EventView;