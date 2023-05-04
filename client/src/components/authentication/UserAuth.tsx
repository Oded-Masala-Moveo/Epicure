import React, { useState } from "react";
import "./userAuth.scss";
import { AuthForm } from "../form";
import ClickButton from "../buttons/clickButton/ClickButton";
const UserAuth: React.FC = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  return (
    <>
      <div className="user-nav-container">
        <div className="user-auth-container">
          <h2 className="title-auth-container">sing in</h2>
          <p className="sub-title-auth-container">To continue the order, please sign in</p>
          <div className="auth-container">
            <AuthForm register={isRegister}/>
          </div>
          <div className="switch-form-bar">
            <div className="line"></div>
            <div>
              <p>or</p>
            </div>
            <div className="line"></div>
          </div>
          <div className="switch-form-btn">
            <ClickButton secondary={true}>sing up</ClickButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAuth;
