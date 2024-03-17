import { MenuItem } from "./model/MenuModel.ts";
import { Card, ListGroup, Form } from 'react-bootstrap';

import { useAppSelector } from './app/hooks.ts'
import { CurrencySymbolDictionary } from './Consts.ts';

interface Props {
    menuItem: MenuItem;
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

export default function MenuSetMealCard(props: Props) {

    const countryISO = useAppSelector((state) => state.countryISO.value);
    const currencySymbol = CurrencySymbolDictionary[countryISO]!;

    const menuSetMealItems = props.menuItem.description.split('|').sort().map((item: string, i: number) => {
        return <ListGroup.Item disabled key={props.menuItem.id+"-"+i}>{item}</ListGroup.Item>
    });

    const setMenuPrices = props.menuItem.itemVariants.map((itemVariant) => {
        return <Form.Group style={priceFormGroup} className="mb-3" key={`${itemVariant.id}-${itemVariant.menuItem_Id}`} >
            <Form.Label style={priceLabelStyle}>{itemVariant.variant_Name}</Form.Label>
            <Form.Control disabled style={priceTextBoxStyle} type="text" placeholder={`${currencySymbol}${itemVariant.price.toFixed(2)}`} />
        </Form.Group>;
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
                    {props.menuItem.itemVariants.length > 1 ? <Card.Text style={{ textAlign: 'left' }} ><b>Sizes:</b></Card.Text> : null}
                    <Form>
                        {setMenuPrices}
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}