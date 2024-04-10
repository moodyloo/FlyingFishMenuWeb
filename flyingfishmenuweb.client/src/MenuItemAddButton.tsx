import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import { ItemVariant, MenuItem } from "./model/MenuModel.ts";

import { itemAddedToBasket } from './features/shoppingbasket/ShoppingBasketSlice.ts';
import { useAppDispatch } from './app/hooks.ts'

interface Props {
    itemVariant: ItemVariant;
    menuItem: MenuItem;
}
export default function MenuItemAddButton(props: Props) {
    const [added, setAdded] = useState(false);
    const { itemVariant, menuItem } = props;

    const dispatch = useAppDispatch();

    const addItemFunction = () => {
        dispatch(itemAddedToBasket({ itemVariant: itemVariant, qty: 0, menuItem: menuItem }));
        setAdded(true);
    }

    useEffect(() => {
        if (added) {
            const timer = setTimeout(() => {
                setAdded(false);
            }, 750);

            return () => {
                clearTimeout(timer)
            }
        }
    }, [added]);

    return (
        <>
            {itemVariant.isUnavailable ? <Button variant="secondary" disabled>Unavailable</Button> : <Button variant={added ? "success" : "primary"} onClick={() => addItemFunction()} disabled={added}>{added ? "✔" : "+"}</Button >}
        </>
        
    )
}
