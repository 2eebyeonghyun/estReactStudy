import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';


export const theme = configureStore({

    reducer: {
        theme: themeReducer
    }
});