import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dish, Restaurant } from "../../models";
import { RootState } from '../store';

export interface CartState {
  total: number;
  restaurant: Restaurant | null;
  CartDishes: Dish[];
  LimitPurchase: boolean;
}

const initialState: CartState = {
  total: 0,
  restaurant: null,
  CartDishes: [],
  LimitPurchase: false,
};

export const dishCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    interRestaurant: (state, action: PayloadAction<Restaurant>) => {
      if (!state.restaurant) state.restaurant = action.payload;
    },
    outRestaurant: (state, action: PayloadAction<Restaurant>) => {
      if (!state.CartDishes[0]) state.restaurant = null;
    },
    addDishToCart: ( state, action: PayloadAction<{ dish: Dish; restId: string }> ) => {
      if (action.payload.restId == state.restaurant?.id) {
        state.total += action.payload.dish.price;
        state.CartDishes.push(action.payload.dish);
      }else {
        state.LimitPurchase = true;
      }
    },
    removeDishFromCart: (state, action: PayloadAction<Dish>) => {
      state.total -= action.payload.price;
      state.CartDishes.splice(state.CartDishes.indexOf(action.payload), 1);
      if(!state.CartDishes[0]) state.restaurant = null;
    },
  },
});

export const { addDishToCart,interRestaurant,outRestaurant,removeDishFromCart } = dishCartSlice.actions;

export const selectDishes = (state: RootState) => state.cart.CartDishes;
export const selectCart = (state: RootState) => state.cart;

export default dishCartSlice.reducer;
