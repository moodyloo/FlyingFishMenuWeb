import { MenuItem } from "./model/MenuModel.ts";
import { Card, ListGroup, Form } from 'react-bootstrap';
import { useAppSelector } from './app/hooks.ts'
import { CurrencySymbolDictionary } from './Consts.ts';

interface Props {
    menuItem: MenuItem;
}

const cardStyle = {
    width: '300px',
    padding: '5px'
}

const cardTitleBodyStyle = {
    textAlign: 'start' as const
}

const cardPriceBodyStyle = {
    textAlign: 'start' as const,
    flex: 'none' as const
}

const priceFormGroup = {
    display: 'flex',
    alignItems: 'center'
}

const priceTextBoxStyle = {
    width: '35%'
}

const priceLabelStyle = {
    textAlign: 'start' as const,
    width: '65%'
}

export default function MenuItemCard(props: Props) {

    const countryISO = useAppSelector((state) => state.countryISO.value);
    const currencySymbol = CurrencySymbolDictionary[countryISO]!;

    const itemPrices = props.menuItem.itemVariants.map((itemVariant) => {
        return <Form.Group style={priceFormGroup} className="mb-2" key={`${itemVariant.id}-${itemVariant.menuItem_Id}`} >
            <Form.Label style={priceLabelStyle}>{itemVariant.variant_Name}</Form.Label>
            <Form.Control disabled style={priceTextBoxStyle} type="text" placeholder={`${currencySymbol}${itemVariant.price.toFixed(2)}`} />
        </Form.Group>;
    });

    return (
        <>
            <Card style={cardStyle}>
                <Card.Body style={cardTitleBodyStyle}>
                    <Card.Title>{props.menuItem.name}</Card.Title>
                    {props.menuItem.description != "" ? <Card.Text> {props.menuItem.description}</Card.Text> : null}
                </Card.Body>
                <Card.Body style={cardPriceBodyStyle}>
                    <ListGroup>
                        {itemPrices}
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    )
}