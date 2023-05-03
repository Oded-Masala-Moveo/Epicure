import React from 'react'
import "./login.scss"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const Login :React.FC = () => {
    const loginSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().required("Required"),
      });
      
  return (
    <>
    <div className='login-container'>
        <h2>sing in</h2>
        <p>To continue the order, please sign in</p>
        
    </div>
    </>
  )
}






export default Login