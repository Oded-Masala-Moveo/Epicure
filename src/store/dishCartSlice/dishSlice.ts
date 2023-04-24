import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Dish, Restaurant } from "../../models";

export interface BagDish {
  dish: Dish;
  quantity: number;
  sides: string[];
  changes: string[];
}

interface BagState {
  total: number;
  totalQuantity: number;
  restaurant: Restaurant | null;
  bagDishes: BagDish[];
  limitPurchase: boolean;
  closeNow: boolean;
}

const initialState: BagState = {
  total: 0,
  totalQuantity: 0,
  restaurant: null,
  bagDishes: [],
  limitPurchase: false,
  closeNow: false,
};

export const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    setBagRestaurant: (state, action: PayloadAction<Restaurant>) => {
      if (!state.bagDishes.length) {
        state.restaurant = action.payload;
      }
    },
    clearBagRestaurant: (state) => {
      if (!state.bagDishes.length) {
        state.restaurant = null;
      }
    },
    addDishToBag: (
      state,
      action: PayloadAction<{ dish: Dish; quantity: number; sides: string[]; changes: string[] }>
    ) => {
      const { dish, quantity, sides, changes } = action.payload;

      if (state.restaurant?.id !== dish.restId) {
        state.limitPurchase = true;
        return;
      }

      const existingDish = state.bagDishes.find((d) => d.dish.id === dish.id);
      if (existingDish) {
        existingDish.quantity += quantity;
      } else {
        state.bagDishes.push({ dish, quantity, sides, changes });
      }
      state.total += dish.price * quantity;
      state.totalQuantity += quantity;
      state.limitPurchase = false;
    },
    removeDishFromBag: (state, action: PayloadAction<{ dish: Dish; sides: string[]; changes: string[] }>) => {
      const { dish, sides, changes } = action.payload;
      const existingDish = state.bagDishes.find((d) => d.dish.id === dish.id);
      if (!existingDish) {
        return;
      }
      state.total -= existingDish.quantity * dish.price;
      state.totalQuantity -= existingDish.quantity;
      state.bagDishes = state.bagDishes.filter((d) => d.dish.id !== dish.id || d.sides !== sides || d.changes !== changes);
      if (!state.bagDishes.length) {
        state.restaurant = null;
      }
    },
    clearBag: (state) => {
      state.total = 0;
      state.totalQuantity = 0;
      state.restaurant = null;
      state.bagDishes = [];
      state.limitPurchase = false;
    },
    closeNavbar(state){
      state.closeNow = true;
      setTimeout(() => {
        state.closeNow = false;
      }, 2000);
    }
  },
});

export const {
  addDishToBag,
  clearBag,
  clearBagRestaurant,
  removeDishFromBag,
  setBagRestaurant,
  closeNavbar
} = bagSlice.actions;

export const selectBag = (state: RootState) => state.bag;
export const selectBagDishes = (state: RootState) => state.bag.bagDishes;
export const selectBagTotal = (state: RootState) => state.bag.total;
export const selectBagRestaurant = (state: RootState) => state.bag.restaurant;
export const selectCloseNow = (state: RootState) => state.bag.closeNow;

export default bagSlice.reducer;
