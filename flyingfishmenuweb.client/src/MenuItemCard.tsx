import { MenuItem } from "./model/MenuModel.ts";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

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

export default function MenuItemCard(props: Props) {
    const menuItemPrices = props.menuItem.priceDetails.map((itemPrice, i) => {
        return <Dropdown.Item id={`Price-${i}-${props.menuItem.id}`}>{`${itemPrice.price.toFixed(2)} - ${itemPrice.size}`}</Dropdown.Item>;
    });

    return (
        <>
            <Card key={"card" + props.menuItem.id} style={cardStyle}>
                <Card.Title>
                    <Button style={buttonStyle} variant="primary">+</Button>
                </Card.Title>
                <Card.Body style={cardBodyStyle}>
                    <Card.Title>{props.menuItem.name}</Card.Title>
                    <Card.Text>{props.menuItem.description}</Card.Text>
                </Card.Body>
                <Card.Body style={{display: 'flex'}}>
                    <Form.Control
                        type="text"
                        id={props.menuItem.id + "-textbox"}
                        disabled
                    />
                    <DropdownButton id="dropdown-basic-button" title="">
                        {menuItemPrices}
                    </DropdownButton>
                </Card.Body>
            </Card>
        </>
    )
}