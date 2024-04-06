import { MenuItem } from "./model/MenuModel.ts";
import { Card, ListGroup, Form } from 'react-bootstrap';

import MenuItemPrice from './MenuItemPrice.tsx';

interface Props {
    menuItem: MenuItem;
}

export default function MenuSetMealCard(props: Props) {
    const menuSetMealItems = props.menuItem.description.split('|').sort().map((item: string, i: number) => {
        return <ListGroup.Item disabled key={props.menuItem.id+"-"+i}>{item}</ListGroup.Item>
    });

    const setMenuPrices = props.menuItem.menuItemVariants.map((itemVariant) => {
        return <MenuItemPrice key={"menuItemPrice" + itemVariant.id} itemVariant={itemVariant} menuItem={props.menuItem} />;
    });

    return (
        <>
            <Card key={"card" + props.menuItem.id} style={cardStyle}>
                <Card.Body style={cardBodyStyle}>
                    <Card.Title>{props.menuItem.name}</Card.Title>
                    <Card.Text><b>Containing:</b></Card.Text>
                    <ListGroup>
                        {menuSetMealItems}
                    </ListGroup>
                </Card.Body>
                <Card.Body style={cardPriceBodyStyle}>
                    {props.menuItem.menuItemVariants.length > 1 ? <Card.Text style={{ textAlign: 'left' }} ><b>Sizes:</b></Card.Text> : null}
                    <Form>
                        {setMenuPrices}
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

const cardStyle = {
    width: '325px'
}

const cardBodyStyle = {
    textAlign: 'start' as const
}

const cardPriceBodyStyle = {
    flex: 'none' as const
}
