import { ItemVariant, MenuItem } from "./model/MenuModel.ts";
import { Card, ListGroup, Form } from 'react-bootstrap';
import { useAppSelector } from './app/hooks.ts'
import { CurrencySymbolDictionary } from './consts.ts';

interface Props {
    menuItem: MenuItem;
}

//sort vegetarian choices and non-vegetarian choices
//sort by price also
const sortFunction = (a: ItemVariant, b: ItemVariant): number => {
    let aValue = a.isVegetarian ? 0 : 1;
    let bValue = b.isVegetarian ? 0 : 1;

    //further sort by price, cheapest to more expensive
    if (aValue == bValue) {
        aValue = a.price < b.price ? 1 : 0;
        bValue = b.price < a.price ? 1 : 0;
    }

    return aValue > bValue ? -1 : 1;
}
export default function MenuItemCard(props: Props) {

    const countryISO = useAppSelector((state) => state.countryISO.value);
    const currencySymbol = CurrencySymbolDictionary[countryISO]!;

    const itemPrices = props.menuItem.menuItemVariants.sort(sortFunction).map((itemVariant) => {
        const itemVariantPriceComponent: JSX.Element =
            <Form.Group style={priceFormGroup} className="mb-2" key={`${itemVariant.id}-${itemVariant.menuItemId}`} >
                <Form.Label style={priceLabelStyle}>{itemVariant.variantName}</Form.Label>
                <Form.Control disabled style={priceTextBoxStyle} type="text" placeholder={`${currencySymbol}${itemVariant.price.toFixed(2)}`} />
            </Form.Group>;
        return itemVariant.isVegetarian ? <fieldset style={fieldSetStyle}>
            <legend style={legendVegetarianStyle}>vegetarian</legend>
                {itemVariantPriceComponent}
        </fieldset> : itemVariantPriceComponent;
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

const legendVegetarianStyle = {
    float: 'none',
    width: 'auto',
    fontSize: '15px',
    color: 'green'
} as const

const fieldSetStyle = {
    border: '1px solid green',
    borderRadius: '10px',
    backgroundColor: '#e0ffe0'
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
