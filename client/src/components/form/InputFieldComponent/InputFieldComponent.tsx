import { Field, FormikProps } from "formik";
import { MyFormValues } from "../../../models";
import "./inputFieldComponent.scss"
interface InputFieldProp {
  labelName?: string;
  inputName: keyof MyFormValues;
  inputType: string;
  inputPlaceholder?: string;
  formikProps: FormikProps<MyFormValues>;
}

const InputFieldComponent: React.FC<InputFieldProp> = ({ labelName, inputName, inputPlaceholder, formikProps, inputType, }) => {
  const { touched, errors } = formikProps;
  const hasError = touched[inputName] && errors[inputName];

  return (
    <>
      <div className="input-checkout-container">
       {labelName && <label className="label-checkout" htmlFor={inputName}>
          {labelName}
        </label>}
        <Field
          className={`input-checkout ${hasError ? "has-error" : ""}`}
          name={inputName}
          type={inputType}
          placeholder={inputPlaceholder}
        />
        <div>{hasError && <p className="error-message">{errors[inputName]}</p>}</div>
    
      </div>
    </>
  );
};

export default InputFieldComponent;
