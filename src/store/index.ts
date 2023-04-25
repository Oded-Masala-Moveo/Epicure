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
} from "./dishCartSlice/dishSlice";
export type { BagDish } from "./dishCartSlice/dishSlice";
export { useAppDispatch, useAppSelector } from "./hook";
import bagReducer from "./dishCartSlice/dishSlice";

export default bagReducer;
