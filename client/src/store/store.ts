import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {userReducer, bagReducer} from "./index"

export const store = configureStore({
  reducer: {
    bag: bagReducer,
    user:userReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
