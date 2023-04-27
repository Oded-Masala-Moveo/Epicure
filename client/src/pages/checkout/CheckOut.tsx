import React, { useEffect, useRef } from "react";
import "./checkout.scss";
import { Logo, X_dark } from "../../assets/icons";
import { CheckOutForm, ClickButton } from "../../components";
import {
  selectBag,
  selectBagDishes,
  selectBagTotal,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { BagDishCard } from "../../components/bag/bagDishCard/BagDishCard";

const CheckOut: React.FC = () => {
  const refInput = useRef<HTMLInputElement>(null);
  const currentBagDishes = useAppSelector(selectBagDishes);
  const currentTotal = useAppSelector(selectBagTotal);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(currentBagDishes);
  }, []);
  return (
    <>
      <div className="checkout-page-container">
        <div className="checkout-mobile-navbar-container">
          <div className="close-checkout-nav">
            <X_dark className="logo" />
          </div>
          <div className="close-mobile-logo">
            <Logo className="logo" />
          </div>
        </div>
        <div className="checkout-title">
          <h2>delivery details</h2>
        </div>
        <div className="checkout-form-container">
          <CheckOutForm />
        </div>
        <div>
          <h2>My order</h2>
          <div className="order-details-container">
            {currentBagDishes.length > 0 &&
              currentBagDishes.map((dish) => <BagDishCard item={dish}/>)}
          </div>
          <div className="order-total-container">
            <p>TOTAL - {currentTotal}</p>
          </div>
          <div className="submit-button-container">
            <ClickButton icon={true}  width="335px">
            Complete payment
            </ClickButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
