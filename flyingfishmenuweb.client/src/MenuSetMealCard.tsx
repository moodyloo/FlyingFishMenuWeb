import { MenuItem } from "./model/MenuModel.ts";
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

import { useAppSelector } from './app/hooks.ts'
import { CurrencySymbolDictionary } from './Consts.ts';

interface Props {
    menuItem: MenuItem;
}

const cardStyle = {
    width: '300px'
}

const cardBodyStyle = {
    textAlign: 'start' as const
}

const cardPriceBodyStyle = {
    flex: 'none' as const
}

export default function MenuSetMealCard(props: Props) {

    const countryISO = useAppSelector((state) => state.countryISO.value);
    const currencySymbol = CurrencySymbolDictionary[countryISO]!;

    const menuSetMealItems = props.menuItem.description.split(',').map((item: string, i: number) => {
        return <ListGroup.Item key={props.menuItem.id+"-"+i}>{item}</ListGroup.Item>
    });

    const setMenuPrices = props.menuItem.priceDetails.map((itemPrice, i) => {
        return <ListGroup.Item id={`Price-${i}-${props.menuItem.id}`}>{`${itemPrice.size} - ${currencySymbol}${itemPrice.price.toFixed(2)}`}</ListGroup.Item>;
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
                    <Card.Text style={{ textAlign: 'left' }} ><b>Sizes:</b></Card.Text>
                    <ListGroup>
                        {setMenuPrices}
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    )
}