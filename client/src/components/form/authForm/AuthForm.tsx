import React, { useId, useState } from "react";
import { Formik, Form } from "formik";
import "./auth.scss";
import { MyFormValues } from "../../../models";
import InputFieldComponent from "../InputFieldComponent/InputFieldComponent";
import ClickButton from "../../buttons/clickButton/ClickButton";
import { loginUser } from "../../../services";
import { useAppDispatch, closeAllNavbar, login } from "../../../store";
import {
  AuthFelid,
  authFieldFill,
  initialValues,
  validateFunction,
} from "./authFormHelper";

const AuthForm: React.FC<{ register: boolean }> = ({ register }) => {
  const dispatch = useAppDispatch();
  const [requestError, setRequestError] = useState<number>(0);
  let sendLoginRequest = (values: MyFormValues) => {
    if (values.email && values.password)
      loginUser(values.email, values.password)
        .then((res) => {
          setRequestError(0);
          if (res?._id && res.email && res.userName) {
            dispatch(
              login({
                email: res?.email,
                _id: res?._id,
                userName: res?.userName,
              })
            );
            dispatch(closeAllNavbar(false));
          }
        })
        .catch((err) => {
          console.log(err.response);
          console.log(err.response.status);
          setRequestError(err.response.status);
        });
  };
  return (
    <>
      <div>
        <Formik
          initialValues={initialValues}
          validate={validateFunction}
          onSubmit={sendLoginRequest}
        >
          {({ touched, errors, handleSubmit, dirty, isValid, ...Formik }) => (
            <Form>
              <div className="auth-form-container">
                <div className="input-form-container">
                  {Object.keys(authFieldFill).map((key) => (
                    <InputFieldComponent
                      key={useId()}
                      labelName={authFieldFill[key as keyof AuthFelid].placeholder}
                      authPage={true}
                      formikProps={{ touched, errors, handleSubmit, dirty, isValid, ...Formik }}
                      inputName={ authFieldFill[key as keyof AuthFelid] .name as keyof MyFormValues }
                      inputType={ authFieldFill[key as keyof AuthFelid].type}
                    />
                  ))}
                </div>
                {requestError == 401 && (
                    <div className="auth-request-error-message">
                      <p>Password is incorrect</p>
                    </div>
                  )}
                  {requestError == 404 && (
                    <div className="auth-request-error-message">
                      <p>Email not found</p>
                    </div>
                  )}
                <div>
                  <ClickButton type="submit" onClick={handleSubmit} primaryBlack={dirty && isValid} >
                    {!register ? "Login" : "Register"}
                  </ClickButton>
                </div>
                {!register && (
                  <div className="forget-password-container">
                    <p>Forget password?</p>
                  </div>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AuthForm;
