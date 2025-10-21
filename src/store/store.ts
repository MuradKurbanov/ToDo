import { configureStore } from '@reduxjs/toolkit';
import { mainSlice } from './slice';

export const store = configureStore({ reducer: mainSlice.reducer });

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
