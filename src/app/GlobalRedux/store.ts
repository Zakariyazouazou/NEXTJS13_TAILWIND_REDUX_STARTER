'use client';

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Features/counter/counterSlice';
import DarkMode from "./Features/DarKModeSetup"


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        darkModeReducer : DarkMode
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;