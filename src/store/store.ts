import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './dishCartSlice/dishSlice';

export const store = configureStore({
  reducer: {
    cart: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
