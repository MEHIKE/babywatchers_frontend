import React from "react";

//import "./custom-button.styles.scss";

const CustomLink = ({ children, klass }) => (
  <div className={klass}>
    <a href="#" className="btn-inline">
      {children} &rarr;
    </a>
  </div>
);

export default CustomLink;
