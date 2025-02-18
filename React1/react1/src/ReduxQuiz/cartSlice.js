// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
        deleteToCart: (state, action) => {
            state.items = state.items.filter((item, index) => index !== action.payload);
        }
    }
});

export const { addToCart, clearCart, deleteToCart } = cartSlice.actions;
export default cartSlice.reducer;