//Image
import phoneIcon from './assets/phone.png';
import locationIcon from './assets/location.png';

import { Image } from 'react-bootstrap';

export default function Title() {
    return (
        <>
            <h1 style={{ color: 'white' }}>The Flying Fish</h1>
            <div>
                <Image style={{ height: '20px', marginRight: '10px' }} src={locationIcon} />92 Fleet Road, Fleet, GU51 4PA
            </div>
            <div>
                <Image style={{ height: '20px', marginRight: '10px' }} src={phoneIcon} />01252 444 747
            </div>
        </>
    )
}