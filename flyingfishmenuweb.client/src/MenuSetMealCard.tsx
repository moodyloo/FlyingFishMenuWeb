import { MenuItemPriceDetail, MenuItem } from "./model/MenuModel.ts";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

interface Props {
    menuItem: MenuItem;
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
    top: 15,
    right: 15
}

export default function MenuSetMealCard(props: Props) {
    const menuSetMealPrices = props.menuItem.priceDetails.map((itemPrice: MenuItemPriceDetail, i: number) => {
        return <Dropdown.Item id={`Price-${i}-${props.menuItem.id}`}>{`\u00A3${itemPrice.price.toFixed(2)} - ${itemPrice.size}`}</Dropdown.Item>;
    });

    return (
        <>
            <Card key={"card"+props.menuItem.id} style={cardStyle}>
                <Card.Body style={cardBodyStyle}>
                    <Card.Title>{props.menuItem.name}</Card.Title>
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
        </>
    )
}