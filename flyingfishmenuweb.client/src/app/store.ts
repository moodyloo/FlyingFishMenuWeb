import { configureStore } from '@reduxjs/toolkit';
import defaultMenuTabReducer from '../features/tabs/DefaultMenuTabSlice';
import countryISOReducer  from '../features/tabs/CountryISOSlice';

export const store = configureStore({
    reducer: {
        defaultMenuTab: defaultMenuTabReducer,
        countryISO: countryISOReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch