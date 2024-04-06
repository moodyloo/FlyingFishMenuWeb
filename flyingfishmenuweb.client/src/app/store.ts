import { configureStore } from '@reduxjs/toolkit';
import countryISOReducer  from '../features/countryiso/CountryISOSlice.ts';
import shoppingBasketReducer from '../features/shoppingbasket/ShoppingBasketSlice.ts';

export const store = configureStore({
    reducer: {
        countryISO: countryISOReducer,
        shoppingBasket: shoppingBasketReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store