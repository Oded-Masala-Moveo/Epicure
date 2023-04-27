import { Field, FormikProps } from "formik";
import { MyFormValues } from "../../../models";

interface InputFieldProp {
  labelName: string;
  inputName: keyof MyFormValues;
  inputType: string;
  inputPlaceholder?: string;
  formikProps: FormikProps<MyFormValues>;
}

const InputFieldComponent: React.FC<InputFieldProp> = ({
  labelName,
  inputName,
  inputPlaceholder,
  formikProps,
  inputType,
}) => {
  const { touched, errors } = formikProps;
  const hasError = touched[inputName] && errors[inputName];

  return (
    <>
      <div className="input-checkout-container">
        <label className="label-checkout" htmlFor={inputName}>
          {labelName}
        </label>
        <Field
          className={`input-checkout ${hasError ? "has-error" : ""}`}
          name={inputName}
          type={inputType}
          placeholder={inputPlaceholder}
        />
        {hasError && <div className="error-message">{errors[inputName]}</div>}
        {touched[inputName] && !errors[inputName] && (
          <div className="success-message">Valid input!</div>
        )}
      </div>
    </>
  );
};

export default InputFieldComponent;
