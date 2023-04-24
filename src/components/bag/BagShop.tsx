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
// import {} from "../../services/requestsApiServices"
const BagShop: React.FC<{ width?: string }> = ({ width }) => {
  const shopBag = useAppSelector(selectBagDishes);

  if (shopBag.length) return <ActiveBag />;
  return <ActiveBag />;
};

export const ActiveBag: React.FC = () => {
  const restaurant = useAppSelector(selectBagRestaurant);
  const shopBag = useAppSelector(selectBagDishes);
  const total = useAppSelector(selectBagTotal);
  return (
    <div className="mobile-bag-nav">
      <div className="active-bag-container">
        <h2> my order</h2>
        <p>{restaurant?.name}</p>
        <div className="bag-item-list-container">
          {shopBag.map((shopBagItem) => (
            <BagDishCard item={shopBagItem} />
          ))}
        </div>
        <div className="total-bag-price-container">
          <h2>total -</h2>
          <div className="total-icon">
            <Shekel />
          </div>
          <p>{total}</p>
        </div>
        <div className="checkout-bag-btn">
          <ClickButton primaryBlack={true}>checkout</ClickButton>
        </div>
      </div>
    </div>
  );
};

const BagDishCard: React.FC<{ item: BagDish }> = ({ item }) => {
  return (
    <>
      <div className="bag-dish-card-container">
        <div className="bag-dish-card-image">
          <img src={item.dish.image} alt={item.dish.name} />
        </div>
        <div>
          <h3>{item.dish.name}</h3>
          <p>{item.dish.description}</p>
        </div>
      </div>
    </>
  );
};
export const EmptyBag: React.FC = () => {
  return (
    <div className="mobile-bag-nav">
      <div className="empty-bag-container">
        <div className="bag-icon">
          <Bag />
        </div>
        <h2>Your bag is empty</h2>
      </div>
    </div>
  );
};

export default BagShop;
