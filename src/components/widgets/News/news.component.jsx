import React, { Fragment } from "react";
import { ReactComponent as NewsSvg } from "../../../img/new.svg";

//import headerComponent from "../header/header.component";

const NewsIcon = ({ tooltip, number }) => {
  //const { header } = settings;
  return (
    <Fragment>
      <div className="user-nav__icon-box tooltip">
        <span className="tooltiptext">{tooltip}</span>
        <NewsSvg className="user-nav__icon"></NewsSvg>
        <span className="user-nav__notification">{number}</span>
      </div>
    </Fragment>
  );
};

export default NewsIcon;
