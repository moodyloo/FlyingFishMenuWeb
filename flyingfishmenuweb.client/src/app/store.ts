import { configureStore } from '@reduxjs/toolkit';
import defaultMenuTabReducer from '../features/tabs/DefaultMenuTabSlice';

export const store = configureStore({
    reducer: {
        defaultMenuTab: defaultMenuTabReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch