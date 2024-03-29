import { useCallback, memo } from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { Card, Image, CardGroup } from 'react-bootstrap';

import Title from './Title.tsx';

import { contactUs } from './consts.ts';

import locationIcon from './assets/location.webp';
import phoneIcon from './assets/phone.webp';

const center = {
    lat: 51.283135, 
    lng: - 0.84004,
};

interface Props {
    mapApiKey: string;
}
const Location = memo(function Location(props: Props) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: props.mapApiKey,
        nonce: "flyingfish"
    });


    const onLoad = useCallback(function callback(map: google.maps.Map) {
        map.setOptions({
            draggable: false,
            zoomControl: true,
            scrollwheel: false,
            disableDoubleClickZoom: true,
            zoom: 20,
            center: center
        });
    }, [])

    return (
        <>
            <Title titleName={contactUs} />
            <CardGroup style={cardGroupStyle}>
                <Card style={cardContactDetailsStyle}>
                    <Card.Body>
                        <Card.Title>Contact Details</Card.Title>
                        <Card.Text>
                            <Image style={iconStyle} src={locationIcon} alt="Location Icon" /> 92 Fleet Road, Fleet GU51 4PA
                        </Card.Text>
                        <Card.Text>
                            <Image style={iconStyle} src={phoneIcon} alt="Phone Icon" /> 01252 444 747
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={cardMapStyle}>
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={center}
                            onLoad={onLoad}
                        >
                            <MarkerF key={"flyingfishMarker"} position={center} />
                        </GoogleMap>
                    ) : null}
                </Card>
            </CardGroup>
        </>
    );


});

export default Location;

const iconStyle = {
    width: '20px'
}

const cardContactDetailsStyle = {
    padding: '5px',
    width: '100%'
}

const cardMapStyle = {
    padding: '5px',
    height: '100%',
    width: '100%'
}

const cardGroupStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflowY: 'auto',
    height: '100%',
    marginBottom: '20px',
    padding: '10px',
} as const

const mapContainerStyle = {
    width: '100%',
    height: '100%'
}