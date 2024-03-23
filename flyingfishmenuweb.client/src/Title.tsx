//Image
import backIcon from './assets/back.png';

import { Image } from 'react-bootstrap';

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
                    <button style={backButtonStyle}>
                        <Image src={backIcon} style={backStyle} />
                    </button>
                </Link> : null}
                <h1 style={shopNameStyle}>{props.titleName}</h1>
            </div>
        </div>
    )
}

const backButtonStyle = {
    width: '50px',
    height: '50px',
    left: '0',
    top: '10%',
    position: 'absolute',
    backgroundColor: 'transparent',
    borderColor: 'transparent'
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
const backStyle = { height: '25px' }