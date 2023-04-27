import React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  FormikErrors,
} from "formik";
import * as Yup from "yup";
import { MyFormValues } from "../../models";
import { ClickButton, InputFieldComponent } from "..";

const cvcRegex = /^\d{3,4}$/;
const expiryDateRegex = /^(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/;
const phoneRegex = /^((\+|00)?972\-?|0)([234578]\d|\d{2})\-?\d{7}$/;
const nameRegex = /^[a-zA-Z ]{2,50}$/;

const checkoutSchema: Yup.Schema<MyFormValues> = Yup.object().shape({
  fullName: Yup.string()
    .matches(nameRegex, "Must be a valid name")
    .required("Required"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .matches(phoneRegex, "Must be a valid Israel phone number")
    .required("Required"),
  nameOnCard: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  cardNumber: Yup.string()
    .matches(/^\d{16}$/, "Must be a 16-digit number")
    .required("Required"),
  cvc: Yup.string()
    .matches(cvcRegex, "Must be a 3- or 4-digit number")
    .required("Required"),
  expiryDate: Yup.string()
    .matches(expiryDateRegex, "Must be a valid expiry date (MM/YY or MM/YYYY)")
    .required("Required"),
});

const validateFunction = (values: MyFormValues) => {
  return checkoutSchema
    .validate(values, { abortEarly: false })
    .then(() => {})
    .catch((err: Yup.ValidationError) => {
      const errors: FormikErrors<MyFormValues> = {};
      err.inner.forEach((error: Yup.ValidationError) => {
        errors[error.path as keyof MyFormValues] = error.message;
      });
      return errors;
    });
};

const CheckOutForm: React.FC = () => {
  const initialValues: MyFormValues = {
    fullName: "",
    address: "",
    phone: "",
    nameOnCard: "",
    cardNumber: "",
    cvc: "",
    expiryDate: "",
  };

  const fieldFill = {
    fullName: {
      name: "fullName",
      labelName: "Full Name",
      placeholder: "fill your full name",
    },
    address: {
      name: "address",
      labelName: "Address",
      placeholder: "fill your address",
    },
    phone: {
      name: "phone",
      labelName: "Phone",
      placeholder: "fill your phone number",
    },
    nameOnCard: {
      name: "nameOnCard",
      labelName: "Name on Card",
      placeholder: "fill your name on",
    },
    cardNumber: {
      name: "cardNumber",
      labelName: "Card Number",
      placeholder: "fill your card number",
    },
    cvc: { name: "cvc", labelName: "CVC", placeholder: "fill your CVV" },
    expiryDate: {
      name: "expiryDate",
      labelName: "Expiry Date",
      placeholder: "fill your expiry date",
    },
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validateFunction}
        onSubmit={() => {}}
      >
        {({ touched, errors, ...Formik }) => (
          <Form>
            <div className="checkout-form-container">
              <div className="checkout-form-inputs">
                <InputFieldComponent
                  formikProps={{ touched, errors, ...Formik }}
                  labelName={fieldFill.fullName.labelName}
                  inputName={fieldFill.fullName.name as keyof MyFormValues}
                  inputType="text"
                  inputPlaceholder={fieldFill.fullName.placeholder}
                />
                <InputFieldComponent
                  formikProps={{ touched, errors, ...Formik }}
                  labelName={fieldFill.address.labelName}
                  inputName={fieldFill.address.name as keyof MyFormValues}
                  inputType="text"
                  inputPlaceholder={fieldFill.address.placeholder}
                />
                <InputFieldComponent
                  formikProps={{ touched, errors, ...Formik }}
                  labelName={fieldFill.phone.labelName}
                  inputName={fieldFill.phone.name as keyof MyFormValues}
                  inputType="tel"
                  inputPlaceholder={fieldFill.phone.placeholder}
                />
              </div>
              <div className="checkout-form-inputs">
                <InputFieldComponent
                  formikProps={{ touched, errors, ...Formik }}
                  labelName={fieldFill.nameOnCard.labelName}
                  inputName={fieldFill.nameOnCard.name as keyof MyFormValues}
                  inputType="text"
                  inputPlaceholder={fieldFill.nameOnCard.placeholder}
                />
                <InputFieldComponent
                  formikProps={{ touched, errors, ...Formik }}
                  labelName={fieldFill.cardNumber.labelName}
                  inputName={fieldFill.cardNumber.name as keyof MyFormValues}
                  inputType="text"
                  inputPlaceholder={fieldFill.cardNumber.placeholder}
                />
                <InputFieldComponent
                  formikProps={{ touched, errors, ...Formik }}
                  labelName={fieldFill.cvc.labelName}
                  inputName={fieldFill.cvc.name as keyof MyFormValues}
                  inputType="text"
                  inputPlaceholder={fieldFill.cvc.placeholder}
                />
                <InputFieldComponent
                  formikProps={{ touched, errors, ...Formik }}
                  labelName={fieldFill.expiryDate.labelName}
                  inputName={fieldFill.expiryDate.name as keyof MyFormValues}
                  inputType="text"
                  inputPlaceholder={fieldFill.expiryDate.placeholder}
                />
              </div>
              {/* <div className="checkout-form-buttons">
                <button type="submit">Submit</button>
                <ClickButton type="submit">Submit</ClickButton>
              </div> */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckOutForm;
