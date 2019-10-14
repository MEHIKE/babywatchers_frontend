import React, { useState, useEffect } from "react";
//import React from "react";
import { connect } from "react-redux";

/*import {
  getUsers,
  setCurrent,
  getUserLogin
} from "../../redux/user/user.actions";
*/
import { getUserLogin } from "../../redux/user/user.actions";
import { setCurrentUser } from "../../redux/user/user.actions";

import PropTypes from "prop-types";

//import { createStructuredSelector } from "reselect";
//import LocalizedStrings from "react-localization";
//import language from "./header.json";

import { useTranslation } from "react-i18next";

//{ users: { currentUser, loading, users }, setCurrent, getUsers, getUserLogin }
//const Loginpage = ({ getUsers }, props) => {
const Loginpage = ({ getUserLogin, currentUser, setCurrentUser, ...props }) => {
  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  //const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    //f (header != null) getCurrentHeader(currentHeader.username);
    // else getCurrentHeader("logimata");
    // eslint-disable-next-line
    if (currentUser) {
      setUsername(currentUser.username);
      setPassword(currentUser.password);
      console.log("useeffect currentuser.usernam=" + currentUser.username);
    } //else getUserLogin((currentUser = { username: "meh", password: "pass" }));
    //console.log("useeffect props=" + props.show);
    //getUsers("mehike");
  }, [currentUser]);

  if (loading || currentUser === null) {
    return <h4>Loading....</h4>;
  }

  const handleLogin = () => {
    //event.preventDefault();
    console.log(
      "Loginpage handleLogin event    username=" +
        username +
        " password=" +
        password
    );
    if (username === "" || password === "") {
      console.log("palun sisesta ikka kasutajanimi ja prool");
    } else {
      //console.log("currentUser=" + currentUser);

      const currentUser = {
        username: username,
        password: password
      };
      console.log("new currentUser=" + currentUser);

      getUserLogin(currentUser);

      console.log("salvestatud currentUser=" + currentUser);

      setCurrentUser(currentUser);
      console.log("salvestatud currentUser=" + currentUser);

      //getUsers(username);
      setPassword("");
      props.show = true;
    }
  };

  return (
    <div className={props.show ? "modal-wrapper-show" : "modal-wrapper"}>
      {console.log("props.show=" + props.show)}

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
              onChange={props.close}
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
                  <div action="#" className="form">
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
                        name="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
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
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                      <label htmlFor="password" className="form__label">
                        Parool
                      </label>
                    </div>

                    <div className="form__group">
                      <button
                        className="btn btn--pink btn--animated"
                        onClick={handleLogin}
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
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

Loginpage.propTypes = {
  setCurrentUser: PropTypes.func,
  getUserLogin: PropTypes.func.isRequired,
  currentUser: PropTypes.object,
  users: PropTypes.object
};

const mapStateToProps = state => ({
  currentUser: state.currentUser
  //users: state.users
});

export default connect(
  mapStateToProps,
  { getUserLogin, setCurrentUser }
)(Loginpage);