import { configureStore } from '@reduxjs/toolkit';
import countryISOReducer  from '../features/countryiso/CountryISOSlice.ts';

export const store = configureStore({
    reducer: {
        countryISO: countryISOReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch