import { useAppSelector, useAppDispatch } from './app/hooks.ts'
import { CurrencySymbolDictionary } from './consts.ts';
import { itemDeletedFromBasket } from './features/shoppingbasket/ShoppingBasketSlice.ts';
import Title from './Title.tsx';


import { Card, Button} from 'react-bootstrap';

export default function ShoppingBasket() {

    const countryISO = useAppSelector((state) => state.countryISO.value);
    const currencySymbol = CurrencySymbolDictionary[countryISO];
    const shoppingBasketItems = useAppSelector((state) => state.shoppingBasket.value);

    const dispatch = useAppDispatch();

    const getTotalCost = (): string => {
        let totalCost: number = 0;
        shoppingBasketItems.forEach(item => {
            totalCost += item.itemVariant.price * item.qty;
        });
        return totalCost.toFixed(2);
    }

    const shoppingBasketItemComponents = shoppingBasketItems.map(shoppingBasketItem => {
        const { itemVariant, menuItem, qty } = shoppingBasketItem;

        const variantName: string = itemVariant.variantName != null && itemVariant.variantName.length > 0 ? "(" + itemVariant.variantName + ")" : ""

        return <Card key={`basketItem-${itemVariant.variantName}`} style={basketItemContainerStyle}>
            <Card.Title>
                {`${itemVariant.id} - ${menuItem.name} ${variantName}`}
            </Card.Title>
            <div style={{ flex: '100' }} />
            <Card.Text>
                <b>Quantity Ordered: </b>{qty}
                <br />
                <b>Subtotal: </b>{`${currencySymbol}${(itemVariant.price * qty).toFixed(2)}`}
            </Card.Text>
            <Card.Text>
                <Button variant="danger" onClick={() => dispatch(itemDeletedFromBasket(itemVariant))}>Remove All</Button>
            </Card.Text>
        </Card>
    });

    return (
        <>
            <Title titleName="Basket"/>
            <div style={cardGroupStyle}>
                <Card style={totalStyle}>
                    <Card.Title>{`Total: ${currencySymbol}${getTotalCost()}`}</Card.Title>
                    <Card.Text>We only take collection orders at the moment</Card.Text>
                </Card>
                <Card style={basketContentStyle}>
                    {shoppingBasketItemComponents}
                </Card>
            </div>
        </>
    )
}

const basketItemContainerStyle = {
    borderStyle: 'solid',
    borderRadius: '10px',
    width: '300px',
    height: '350px',
    textAlign: 'start'
} as const

const totalStyle = {
    width: '100%'
}

const basketContentStyle = {
    overflowY: 'auto',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexFlow: 'wrap',
    justifyContent: 'center',
    gap: '10px'
} as const

const cardGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    gap: '5px',
    height: '100%',
    marginBottom: '20px',
    padding: '10px',
} as const