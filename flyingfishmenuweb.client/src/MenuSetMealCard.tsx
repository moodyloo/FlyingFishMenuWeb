import { MenuItemPriceDetail, MenuItem } from "./model/MenuModel.ts";
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';


interface Props {
    menuItem: MenuItem;
}

const cardStyle = {
    width: '300px'
}

const cardBodyStyle = {
    textAlign: 'start' as const
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
            <Card key={"card" + props.menuItem.id} style={cardStyle}>
                <Card.Title>
                    <Button style={buttonStyle} variant="primary">+</Button>
                </Card.Title>
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
                <Card.Body style={{ display: 'flex' }}>
                    <Form.Control
                        type="text"
                        id={props.menuItem.id + "-textbox"}
                        disabled
                    />
                    <DropdownButton id="dropdown-basic-button" title="">
                        {menuSetMealPrices}
                    </DropdownButton>
                </Card.Body>
            </Card>
        </>
    )
}