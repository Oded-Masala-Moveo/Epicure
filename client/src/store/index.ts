export {
  addDishToBag,
  clearBag,
  clearBagRestaurant,
  removeDishFromBag,
  setBagRestaurant,
  closeAllNavbar,
  addCommentToBag,
  clearCommentFromBag,
  selectBag,
  selectBagDishes,
  selectBagRestaurant,
  selectBagTotal,
  selectBagTotalQuantity,
  selectCloseNow,
  selectComment
} from "./dishCartSlice/bagSlice";
export type { BagDish } from "./dishCartSlice/bagSlice";
export { useAppDispatch, useAppSelector } from "./hook";
import bagReducer from "./dishCartSlice/bagSlice";

export default bagReducer;
