import React from "react";

//import { useTranslation } from "react-i18next";

const FormInput = ({ onChange, label, htmlFor, ...otherProps }) => (
  <div className="form__group">
    <input className="form__input" onChange={onChange} {...otherProps} />
    {label ? (
      <label htmlFor={htmlFor} className="form__label">
        {label}
      </label>
    ) : null}
    {/*<p className="help is-danger">{username}</p>*/}
  </div>
);
export default FormInput;
