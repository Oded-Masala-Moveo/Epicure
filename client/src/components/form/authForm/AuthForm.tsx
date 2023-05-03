import React from 'react'
import * as Yup from "yup";   
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./auth.scss"

const AuthForm:React.FC = () => {
 
    const loginSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().required("Required"),
      });
  return (
    <>
    <div>AuthForm</div>
    </>
  )
}

export default AuthForm