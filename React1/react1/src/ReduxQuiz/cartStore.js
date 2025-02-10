import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';


export const cart = configureStore({

    reducer: {
        cart: cartReducer
    }
});