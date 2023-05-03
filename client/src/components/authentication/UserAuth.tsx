import React from "react";
import "./userAuth.scss";
import { AuthForm } from "../form";
import ClickButton from "../buttons/clickButton/ClickButton";
const UserAuth: React.FC = () => {
  return (
    <>
      <div className="user-nav-container">
        <div className="user-auth-container">
          <h2>sing in</h2>
          <p>To continue the order, please sign in</p>
          <div className="auth-container">
            <AuthForm />
          </div>
          <div className="switch-form-bar">
            <div className="line"></div>
            <div >or</div>
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
