import React, { useState, useEffect, Suspense } from "react";
//import React from "react";
import { connect } from "react-redux";
//import { createStructuredSelector } from "reselect";
//import LocalizedStrings from "react-localization";
//import language from "./header.json";

import { useTranslation } from "react-i18next";

const Loginpage = (props, show) => {
  const { t, i18n } = useTranslation();
  //const [users, setUsers] = useState([]);
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    //f (header != null) getCurrentHeader(currentHeader.username);
    // else getCurrentHeader("logimata");
    // eslint-disable-next-line
    console.log("props=" + props.show);
    console.log("show=" + show);
  }, []);

  return (
    <div className={props.show ? "modal-wrapper-show" : "modal-wrapper"}>
      {console.log("prps.sho=" + props.show)}

      <div className="popuplogin" id="popup">
        <div className="popuplogin__content">
          <section
            className="popuplogin__left section-login"
            id="section-login"
          >
            <input
              type="checkbox"
              className="navigation__checkbox"
              id="navi-toggle"
              checked
            />

            <label
              htmlFor="navi-toggle"
              className="navigation__button popuplogin__close"
              style={{
                backgroundColor: "red",
                color: "red",
                top: "3rem",
                right: "3rem",
                height: "7rem",
                width: "7rem"
              }}
            >
              <span className="navigation__icon">&nbsp;</span>
            </label>
            {/*<div className="pouplogin__left">
              <img
                src={require("../../img/header1.jpg")}
                alt="Laps1"
                className="popuplogin__img"
              />
              <img
                src={require("../../img/features1.jpg")}
                alt="Laps2"
                className="popuplogin__img"
  />
  </div>*/}
            <div className="popuplogin__right loginrow">
              {/*<a href="#" class="popup__close">
                &times;
</a>*/}
              <div className="login">
                <div className="login__form">
                  <form action="#" className="form">
                    <div className="u-margin-bottom-medium">
                      <h2 className="heading-secondary">Logi sisse</h2>
                    </div>
                    <div className="form__group">
                      <input
                        type="text"
                        className="form__input"
                        placeholder="kasutajanimi/email/idkood"
                        required
                        id="name"
                      />
                      <label htmlFor="name" className="form__label">
                        Kasutaja
                      </label>
                    </div>

                    <div className="form__group">
                      <input
                        type="password"
                        className="form__input"
                        placeholder="Parool"
                        required
                        id="password"
                      />
                      <label htmlFor="password" className="form__label">
                        Parool
                      </label>
                    </div>

                    <div className="form__group">
                      <button
                        className="btn btn--pink btn--animated"
                        onClick={props.close}
                      >
                        Logi sisse &rarr;
                      </button>
                    </div>

                    <div className="login__line">&nbsp;</div>

                    <div className="link__group">
                      <div className="btnlogin-inline">
                        <a href="#" className="btn-inline">
                          Uus kasutaja &rarr;
                        </a>
                      </div>
                      <div className="btnlogin-inline__right">
                        <a href="#" className="btn-inline">
                          Uus parool &rarr;
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
