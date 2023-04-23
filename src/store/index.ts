export {
  addDishToCart,
  clearCartRestaurant,
  setCartRestaurant,
  removeDishFromCart,
  selectDishes,
  selectCart,
  clearCart,
} from "./dishCartSlice/dishSlice";
export { useAppDispatch, useAppSelector } from "./hook";
import cartReducer from "./dishCartSlice/dishSlice";

export default cartReducer;
