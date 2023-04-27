import React, { useEffect, useRef } from "react";
import "./checkout.scss";
import { Logo, X_dark } from "../../assets/icons";
import { MyApp } from "./FormikTest";
import { Field } from "formik";
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
          <h1>Checkout</h1>
        </div>
        <div className="checkout-form-container">
        
        </div>
      </div>
    </>
  );
};

interface InputFieldProp {
  labelName: string;
  inputName:string;
  type: string;
  placeholder: string;
  inputRef: React.RefObject<HTMLInputElement>;
}
const InputFieldComponent: React.FC<InputFieldProp> = ({
  labelName,
  inputName,
  placeholder,
  inputRef,
  type,
}) => {
  return (
    
    <><Field name={inputName} type={type} ref={inputRef} placeholder={placeholder}/>
      {/* <label htmlFor={labelName}>{labelName}</label>
      <input type={type} ref={inputRef} placeholder={placeholder} /> */}
    </>
  );
};
export default CheckOut;
