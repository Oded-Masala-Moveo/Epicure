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
import useWindowSize, { desktop } from "../../hooks/useWindowSize";
import { Footer } from "../../layouts";

const CheckOut: React.FC = () => {
  const { width } = useWindowSize();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const currentBagDishes = useAppSelector(selectBagDishes);
  const currentTotal = useAppSelector(selectBagTotal);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log(currentBagDishes);
  }, []);
  return (
    <>
      <div className="checkout-mobile-navbar-container">
        <div className="close-checkout-nav">
          <X_dark className="logo" />
        </div>
        <div className="close-mobile-logo">
          <Logo className="logo" />
        </div>
      </div>
      <div className="checkout-page-container">
        <div className="checkout-form-container">
          <div className="checkout-title">
            <h2>delivery details</h2>
          </div>
          <CheckOutForm />
        </div>
        <div>
          <div className="order-details-container">
            <h2>My order</h2>
            {currentBagDishes.length > 0 &&
              currentBagDishes.map((dish) => <BagDishCard item={dish} />)}
            {width > desktop && (
              <>
                <div className="top-comment-line"></div>
                <div className="bag-comment-container">
                  <div className="comment-title">
                    <h1>Add A Comment</h1>
                  </div>
                  <div className="comment-input">
                    <textarea
                      ref={textAreaRef}
                      placeholder="Special requests, allergies, detary restrictions, etc."
                      cols={30}
                      rows={10}
                    />
                  </div>
                </div>
              </>
            )}
            <div className="order-total-container">
              <p>TOTAL - {currentTotal}</p>
            </div>
            <div className="submit-button-container">
              <ClickButton icon={true} width="335px">
                Complete payment
              </ClickButton>
            </div>
          </div>
        </div>
      </div>
      {width > desktop - 1 && <Footer />}
    </>
  );
};

export default CheckOut;
