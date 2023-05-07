import React, { useEffect, useState } from "react";
import "./userAuth.scss";
import { AuthForm } from "../form";
import ClickButton from "../buttons/clickButton/ClickButton";
import { useAppSelector, selectUser, useAppDispatch } from "../../store";
const UserAuth: React.FC = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const onLogOut = () => {
  }
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      <div className="user-nav-container">
        {!user.userName && (
          <div className="user-auth-container">
            <h2 className="title-auth-container">sing in</h2>
            <p className="sub-title-auth-container">
              To continue the order, please sign in
            </p>
            <div className="auth-container">
              <AuthForm register={isRegister} />
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
        )}
        {user.userName && (
          <div className="user-logged-container">
            <div className="title-logged-container">
              <p>Hi {user.userName}, enjoy your meal</p>
              <ClickButton borderRadius="10px" backGroundColor="#7e2121" width="100px">
                logout
              </ClickButton>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserAuth;
