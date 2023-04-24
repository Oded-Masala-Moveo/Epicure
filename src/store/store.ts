import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import bagReducer from './index';

export const store = configureStore({
  reducer: {
    bag: bagReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
