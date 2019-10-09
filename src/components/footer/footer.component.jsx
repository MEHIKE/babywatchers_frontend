import React from "react";
import { useTranslation } from "react-i18next";
//import { connect } from "react-redux";
//import { createStructuredSelector } from "reselect";

//import { Link } from "react-router-dom";

const Footer = ({ currentUser, hidden }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="cta">
      <h2 className="cta__book-now">{t("footer:news", { number: 3 })}</h2>
      <button className="pagebtn">
        <span className="pagebtn__visible">{t("footer:btn1")}</span>
        <span className="pagebtn__invisible">
          {t("footer:btn2", { number: 3 })}
        </span>
      </button>
    </div>
  );
};

export default Footer;
