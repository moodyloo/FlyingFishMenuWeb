import { Card, Image, CardGroup, Carousel } from 'react-bootstrap';

import flyingfish from './assets/flyingfish.webp';
import flyingfish2 from './assets/flyingfish2.webp';
import flyingfish3 from './assets/flyingfish3.webp';


export default function About() {
    return (
        <>
            <CardGroup style={cardGroupStyle}>
                <Card style={cardImagesStyle} bg="secondary">
                    <Carousel style={carouselStyle} slide>
                        <Carousel.Item>
                            <Image src={flyingfish} style={imageStyle} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={flyingfish2} style={imageStyle} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={flyingfish3} style={imageStyle} />
                        </Carousel.Item>
                    </Carousel>
                </Card>
                <Card style={cardAboutStyle}>
                    <Card.Body>
                        <Card.Title>The Flying Fish</Card.Title>
                        <Card.Text>Welcome to our shop in Fleet, where British classics meet Chinese delights! Indulge in our crispy fish and chips or savor the flavors of our authentic Chinese dishes. With each bite, experience the perfect fusion of two culinary worlds. Join us for a delicious meal and friendly atmosphere that'll keep you coming back for more!</Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </>
    );
}

const carouselStyle = {
    display: 'contents',
}

const cardAboutStyle = {
    padding: '5px',
    height: '100%',
    width: '100%'
}
const imageStyle = {
    width: '100%',
    minHeight: '300px',
    maxHeight: '100%'
}

const cardImagesStyle = {
    width: '100%',
    minHeight: '300px',
    maxHeight: '100%',
    padding :'5px'
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