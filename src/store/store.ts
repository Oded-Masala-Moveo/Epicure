import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from './index';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
