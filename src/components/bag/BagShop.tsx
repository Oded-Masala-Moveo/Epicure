import React from "react";
import { Bag, Shekel } from "../../assets/icons";
import "./bagShop.scss";
import {
  selectBag,
  selectBagDishes,
  useAppSelector,
  selectBagRestaurant,
  BagDish,
  selectBagTotal,
} from "../../store";
import ClickButton from "../buttons/clickButton/ClickButton";
import useWindowSize, { desktop } from "../../hooks/useWindowSize";
import { BagDishCard } from "./bagDishCard/BagDishCard";
import { ActiveBagComponent } from "./activeBag/ActiveBag";
const BagShop: React.FC<{ width?: string }> = ({ width }) => {
  const shopBag = useAppSelector(selectBagDishes);

  if (shopBag.length)
    return (
      <div className="mobile-bag-nav">
        <ActiveBagComponent />
      </div>
    );
  return (
    <div className="mobile-bag-nav">
      <EmptyBag />
    </div>
  );
};

export const EmptyBag: React.FC = () => {
  return (
    <div className="empty-bag-container">
      <div className="bag-icon">
        <Bag />
      </div>
      <h2>Your bag is empty</h2>
    </div>
  );
};

export default BagShop;
