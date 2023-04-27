import React, { useEffect, useRef } from "react";
import "./checkout.scss";
import { Logo, X_dark } from "../../assets/icons";
import { CheckOutForm } from "../../components";

const CheckOut: React.FC = () => {
  const refInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log(refInput);
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
      </div>
    </>
  );
};

export default CheckOut;
