import { Button, Image } from 'react-bootstrap';

import './ImageButton.css';

import { getImageUrl } from './provider/ImageProvider.ts';

interface Props {
    imageText: string;
    imageUrl: string;
}

export default function ImageButton(props: Props) {

    return (
        <>
            <Button style={buttonStyle}>
                <h2 style={textStyle}>{props.imageText}</h2>
                <Image rounded style={imgStyle} src={getImageUrl(props.imageUrl)} alt={props.imageText}></Image>
            </Button>
        </>
    );
}

const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
} as const

const imgStyle = {
    display: 'block',
    height: '100%',
    width: '100%'
}

const buttonStyle = {
    display: 'inline-block',
    height: '300px',
    width: '300px',
    padding: 0,
    margin: 0,
    verticalAlign: 'top',
    overflow: 'hidden',
    position: 'relative',
    borderColor: 'transparent',
    backgroundColor: 'transparent'
} as const