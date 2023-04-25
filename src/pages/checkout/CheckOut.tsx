import React from "react";
import "./checkout.scss"
import { Logo, X_dark } from "../../assets/icons";
const CheckOut: React.FC = () => {
  return (
    <>
      <div className="checkout-page-container">
        <div className="checkout-mobile-navbar-container">
            <div className="close-checkout-nav"><X_dark className="logo"/></div>
            <div className="close-mobile-logo"> <Logo className="logo"/></div>
        </div>
        <div className="checkout-title">
            <h1>Checkout</h1>
        </div>
        <div className="checkout-form-container">
            <label htmlFor="full name">full name</label>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
