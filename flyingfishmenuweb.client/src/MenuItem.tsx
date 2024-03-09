import { MenuCategoryEnum, MenuItemDetail } from "./model/MenuModel";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

interface Props {
    itemDetail: MenuItemDetail;
}

const cardStyle = {
    width: '300px'
}

const cardBodyStyle = {
    textAlign: 'start' as const
}

const cardBodyButtonStyle = {
    position: 'relative' as const
}

const buttonStyle = {
    position: 'absolute' as const,
    bottom: 0,
    right: 10
}

export default function MenuItem(props: Props) {
    return (
        <>
            {props.itemDetail.category == MenuCategoryEnum.SetMeals ?
                <Card key={"card"+props.itemDetail.id} style={cardStyle}>
                    <Card.Body style={cardBodyStyle}>
                        <Card.Title>{props.itemDetail.name}</Card.Title>
                        <Card.Text>Containing: </Card.Text>
                        <ListGroup>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    <Card.Body style={cardBodyButtonStyle}>
                        <Button style={buttonStyle} variant="primary">+</Button>
                    </Card.Body>
                </Card>
                :
                <Card key={"card" + props.itemDetail.id} style={cardStyle}>
                    <Card.Body style={cardBodyStyle}>
                        <Card.Title>{props.itemDetail.name}</Card.Title>
                        <Card.Text>{props.itemDetail.description}</Card.Text>
                    </Card.Body>
                    <Card.Body style={cardBodyButtonStyle}>
                        <Button style={buttonStyle} variant="primary">+</Button>
                    </Card.Body>
                </Card>
            }
        </>
    )
}