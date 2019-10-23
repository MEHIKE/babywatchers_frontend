import React from "react";

//import "./custom-button.styles.scss";

const CustomButton = ({
  children,

  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <div className="form__group">
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } btn btn--pink btn--animated`}
      {...otherProps}
    >
      {children}
    </button>
  </div>
);

export default CustomButton;
