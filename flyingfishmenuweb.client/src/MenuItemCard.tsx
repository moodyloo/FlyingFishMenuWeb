import { MenuItem } from "./model/MenuModel.ts";
import { Card, ListGroup } from 'react-bootstrap';
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

export default function MenuItemCard(props: Props) {

    const countryISO = useAppSelector((state) => state.countryISO.value);
    const currencySymbol = CurrencySymbolDictionary[countryISO]!;

    const itemPrices = props.menuItem.priceDetails.map((itemPrice, i) => {
        return <ListGroup.Item id={`Price-${i}-${props.menuItem.id}`}>{`${itemPrice.size} - ${currencySymbol}${itemPrice.price.toFixed(2)}`}</ListGroup.Item>;
    });

    return (
        <>
            <Card style={cardStyle}>
                <Card.Body style={cardBodyStyle}>
                    <Card.Title>{props.menuItem.name}</Card.Title>
                    <Card.Text>{props.menuItem.description}</Card.Text>
                </Card.Body>
                <Card.Body>
                    <ListGroup>
                        {itemPrices}
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    )
}