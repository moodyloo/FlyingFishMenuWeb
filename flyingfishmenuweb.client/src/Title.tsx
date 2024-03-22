//Image
import phoneIcon from './assets/phone.png';
import locationIcon from './assets/location.png';
import backIcon from './assets/back.png';

import { Image, Button } from 'react-bootstrap';

import { companyName } from './Consts.ts';
import { Link } from 'react-router-dom';

interface Props {
    titleName: string;
}
export default function Title(props: Props) {
    return (
        <div style={titleStyle}>
            <div style={titleAndBackButtonStyle}>
                {props.titleName != companyName ? <Link to="/">
                    <Button variant="light" style={backButtonStyle}>
                        <Image src={backIcon} style={backStyle} />
                    </Button>
                </Link> : null}
                <h1 style={shopNameStyle}>{props.titleName}</h1>
            </div>
            <div>
                {props.titleName == companyName ? <><Image style={contactStyle} src={locationIcon} />92 Fleet Road, Fleet, GU51 4PA </> : <div style={placeHolderDivStyle} />}
            </div>
            <div>
                {props.titleName == companyName ? <><Image style={contactStyle} src={phoneIcon} />01252 444 747</> : <div style={placeHolderDivStyle} />}
            </div>
        </div>
    )
}

const placeHolderDivStyle = {
    height: '20px'
}

const backButtonStyle = {
    width: '12%',
    height: '95%',
    left: '5%',
    top: '50%',
    position: 'absolute'
} as const

const titleAndBackButtonStyle = {
    display: 'inline-block',
    position: 'relative'
} as const

const titleStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    marginBottom: '5px',
    backgroundColor: '#76b1ff'
}

const shopNameStyle = { color: 'white' }
const backStyle = { height: '20px' }
const contactStyle = { height: '20px', marginRight: '10px' }