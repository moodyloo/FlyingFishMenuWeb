import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ShoppingBasketContent, ItemVariant } from '../../model/MenuModel.ts';

import { basketSessionState } from '../../consts.ts';

// Define a type for the slice state
interface ShoppingBasket {
    value: ShoppingBasketContent[]
}

const sessionStateBasket = sessionStorage.getItem(basketSessionState); 

// Define the initial state using that type
const initialState: ShoppingBasket = {
    value: sessionStateBasket == null ? [] : JSON.parse(sessionStateBasket)
}

export const shoppingBasketSlice = createSlice({
    name: 'shoppingBasket',
    initialState,
    reducers: {
        itemAddedToBasket: (state, action: PayloadAction<ShoppingBasketContent>) => {
            const { payload } = action;
            const foundIndex = state.value.findIndex(x => x.itemVariant.id == payload.itemVariant.id);
            if (foundIndex > -1) {
                const newState: ShoppingBasketContent[] = state.value.map<ShoppingBasketContent>(x => {
                    return x.itemVariant.id == payload.itemVariant.id ? { itemVariant: x.itemVariant, qty: x.qty + 1, menuItem: x.menuItem } : x;
                });

                state.value = newState;
            }
            else {
                state.value = [...state.value, { itemVariant: payload.itemVariant, qty: 1, menuItem: payload.menuItem }]
            }

            sessionStorage.setItem(basketSessionState, JSON.stringify(state.value));
        },

        itemDeletedFromBasket: (state, action: PayloadAction<ItemVariant>) => {
            state.value = state.value.filter((x) => x.itemVariant.id != action.payload.id);

            sessionStorage.setItem(basketSessionState, JSON.stringify(state.value));
        }
    }
})
export const { itemAddedToBasket, itemDeletedFromBasket } = shoppingBasketSlice.actions;

export default shoppingBasketSlice.reducer