import {Col, Divider, Empty, Row} from "antd";
import React, {Fragment, useEffect} from "react";
import "./styles.css"
import EventListItem from "../EventListItem";
import EventHeader from "../EventHeader";
import {useDispatch, useSelector} from "react-redux";
import {getAllEvents} from "../../store/slices/eventSlice";
import Loader from "../Loader";

const EventList = () => {

    const dispatch = useDispatch();
    const events = useSelector((state) => state.event.events);
    const isLoading = useSelector((state) => state.event.isLoading);

    useEffect(() => {
        dispatch(getAllEvents())
            .unwrap()
            .then(() => console.log("Finished"))
            .catch(() => {
            })
    }, [dispatch]);

    return (
        <Row>
            <Col span={12} offset={6}>
                <EventHeader/>
                <Divider/>
                {
                    isLoading ? (
                        <Loader/>
                    ) : (
                        <>
                            {
                                events.length ? (
                                    <>
                                        {
                                            events.map((event) => (
                                                <Fragment key={event.id}>
                                                    <EventListItem event={event}/>
                                                </Fragment>
                                            ))
                                        }
                                    </>
                                ) : (
                                    <Empty/>
                                )
                            }
                        </>
                    )
                }
            </Col>
        </Row>
    )
}

export default EventList;