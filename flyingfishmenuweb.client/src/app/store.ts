import { configureStore } from '@reduxjs/toolkit';
import defaultMenuTabReducer from '../features/tabs/DefaultMenuTabSlice.ts';
import countryISOReducer  from '../features/countryiso/CountryISOSlice.ts';

export const store = configureStore({
    reducer: {
        defaultMenuTab: defaultMenuTabReducer,
        countryISO: countryISOReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch