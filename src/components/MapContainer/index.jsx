import React from "react";
import GoogleMapReact from 'google-map-react';
import {PushpinFilled } from "@ant-design/icons";

const AnyReactComponent = () => <div>
    <PushpinFilled style={{
        fontSize: '32px',
        color: '#7A0805',
    }}/>
</div>;

export default function MapContainer({markers = [], onMapClick}) {
    const defaultProps = {
        center: markers.length && markers[0] ? {
            lat: markers[0].lat,
            lng: markers[0].lng
        }: {
            lat: 6.841871646840271,
            lng: 79.86347412026821
        },
        zoom: 15
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{height: '60vh', width: '100%'}}>
            <GoogleMapReact
                onClick={(ev) => onMapClick && onMapClick(ev)}
                bootstrapURLKeys={{key: "AIzaSyCTa29ygLUexFK7XhhMnQhShzPQMUw461w"}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                {
                    markers.map((marker, index) => (
                        <AnyReactComponent
                            key={index}
                            lat={marker.lat}
                            lng={marker.lng}
                            text="My Marker"
                        />
                    ))
                }
            </GoogleMapReact>
        </div>
    );
}