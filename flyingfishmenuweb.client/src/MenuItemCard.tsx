import { MenuItem } from "./model/MenuModel.ts";
import { Card, ListGroup } from 'react-bootstrap';

import MenuItemPrice from './MenuItemPrice.tsx';

interface Props {
    menuItem: MenuItem;
}

export default function MenuItemCard(props: Props) {

    const itemPrices = props.menuItem.menuItemVariants.map((itemVariant) => {
        return <MenuItemPrice key={"menuItemPrice"+itemVariant.id} itemVariant={itemVariant} menuItem={props.menuItem} />;
    });

    return (
        <>
            <Card style={cardStyle}>
                <Card.Body style={cardTitleBodyStyle}>
                    <Card.Title>{props.menuItem.name}</Card.Title>
                    {props.menuItem.description != "" ? <Card.Text> {props.menuItem.description}</Card.Text> : null}
                </Card.Body>
                <div style={cardFillerStyle} /> 
                <Card.Body style={cardPriceBodyStyle}>
                    <ListGroup>
                        {itemPrices}
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    )
}

const cardStyle = {
    width: '300px',
    padding: '5px'
}

const cardFillerStyle = {
    flex: '100'
}

const cardTitleBodyStyle = {
    textAlign: 'start',
    position: 'sticky',
    top: '0',
    backgroundColor: 'inherit'
} as const

const cardPriceBodyStyle = {
    textAlign: 'start' as const,
    flex: 'none' as const,
}

