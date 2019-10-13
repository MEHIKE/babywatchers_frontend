import React, { Fragment } from "react";

//import headerComponent from "../header/header.component";

const Logo = ({ company }) => {
  //const { header } = settings;
  return (
    <Fragment>
      <div className="user-nav__icon-box" to="/">
        {/*<Baby className="icon-red feature__icon header__logo logo"></Baby>*/}
        <img
          src={require("../../img/baby_PNG51765.png")}
          alt="BW pic"
          className="user-nav__user-photo"
        />
        <span className="user-nav__user-name">
          {/*strings.bw*/}
          {/*strings.getLanguage()*/}
          {/*t("header:bw")*/}
          {company && company}
          {/*console.log("company=" + company)*/}
        </span>
      </div>
    </Fragment>
  );
};

export default Logo;
