import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Dish, Restaurant } from "../../models";

interface CartDish {
  dish: Dish;
  quantity: number;
}

interface CartState {
  total: number;
  restaurant: Restaurant | null;
  cartDishes: CartDish[];
  limitPurchase: boolean;
}

const initialState: CartState = {
  total: 0,
  restaurant: null,
  cartDishes: [],
  limitPurchase: false,
};

export const dishCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartRestaurant: (state, action: PayloadAction<Restaurant>) => {
      if (!state.cartDishes[0]) state.restaurant = action.payload;
    },
    clearCartRestaurant: (state) => {
      if (!state.cartDishes[0]) state.restaurant = null;
    },
    addDishToCart: (
      state,
      action: PayloadAction<{ dish: Dish; quantity: number }>
    ) => {
      const { dish, quantity } = action.payload;

      if (state.restaurant?.id !== dish.restId) {
        state.limitPurchase = true;
        return;
      }

      const cartDish = state.cartDishes.find((d) => d.dish.id === dish.id);
      if (cartDish) {
        cartDish.quantity += quantity;
      } else {
        state.cartDishes.push({ dish, quantity });
      }

      state.total += dish.price * quantity;
      state.limitPurchase = false;
    },
    removeDishFromCart: (state, action: PayloadAction<Dish>) => {
      const { id, price } = action.payload;
      const cartDish = state.cartDishes.find((d) => d.dish.id === id);
      if (!cartDish) {
        return;
      }
      state.total -= cartDish.quantity * price;
      state.cartDishes = state.cartDishes.filter((d) => d.dish.id !== id);
      if (state.cartDishes.length === 0) {
        state.restaurant = null;
      }
    },
    clearCart: (state) => {
      state.total = 0;
      state.restaurant = null;
      state.cartDishes = [];
      state.limitPurchase = false;
    },
  },
});

export const {
  addDishToCart,
  clearCart,
  clearCartRestaurant,
  removeDishFromCart,
  setCartRestaurant,
} = dishCartSlice.actions;

export const selectDishes = (state: RootState) => state.cart.cartDishes;
export const selectCart = (state: RootState) => state.cart;

export default dishCartSlice.reducer;
