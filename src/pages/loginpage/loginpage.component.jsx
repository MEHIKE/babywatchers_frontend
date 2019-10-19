import React, { useState, useEffect, useContext } from "react";

//import React from "react";
import { connect } from "react-redux";

/*import {
  getUsers,
  setCurrent,
  getUserLogin
} from "../../redux/user/user.actions";
*/
import LoadingContext from "../../contexts/loading.context";

import { getUserLogin } from "../../redux/user/user.actions";
import {
  setCurrentUser,
  clearCurrentUser
} from "../../redux/user/user.actions";

import PropTypes from "prop-types";

//import { createStructuredSelector } from "reselect";
//import LocalizedStrings from "react-localization";
//import language from "./header.json";

import { useTranslation } from "react-i18next";

//{ users: { currentUser, loading, users }, setCurrent, getUsers, getUserLogin }
//const Loginpage = ({ getUsers }, props) => {
const Loginpage = ({
  user: { currentUser, users, loading },
  getUserLogin,
  clearCurrentUser,
  setCurrentUser,

  ...props
}) => {
  const { showLoading, hideLoading } = useContext(LoadingContext);

  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState("");
  //const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  //const [currentUser, setCurrentUser] = useState("");

  //tekitame ühise muutuja, ja järgmisena saame selle lahti jagada  muutujateks
  //const [currentUser, setCurrentUser] = useState({
  //  username: "",
  //  password: ""
  //});
  //saame laiali
  //const { username, password } = currentUser;

  useEffect(() => {
    //f (header != null) getCurrentHeader(currentHeader.username);
    // else getCurrentHeader("logimata");
    // eslint-disable-next-line
    if (currentUser) {
      setUsername(currentUser.username);
      setPassword(currentUser.password);
      console.log("useeffect currentuser.usernam=" + currentUser.username);
      console.log("LOADING2=" + loading);
    } //else getUserLogin((currentUser = { username: "meh", password: "pass" }));
    //console.log("useeffect props=" + props.show);
    //getUsers("mehike");
  }, [currentUser]);

  if (loading || currentUser === null) {
    console.log("LOADING=TRUE");
    //return <h4>Loading....</h4>;
  }

  if (loading == false && (currentUser !== undefined && currentUser !== null)) {
    console.log("CURRENT=" + currentUser.username);
    console.log("LOADING2=TRUE");
    props.current(currentUser.username);
    clearCurrentUser();
    props.show = false;
    //clearCurrentUser();
    //return;
  }

  const handleLogin = () => {
    //event.preventDefault();
    console.log("loginpage hetke keel:" + i18n.language);
    console.log(
      "Loginpage handleLogin event    username=" +
        username +
        " password=" +
        password
    );
    //console.log(this.refs.username.value);
    if (username === "" || password === "") {
      console.log("palun sisesta ikka kasutajanimi ja prool");
      //console.log(this.refs.username.value);
    } else {
      showLoading();
      //console.log("currentUser=" + currentUser);

      /*const currentUser = {
        username: username,
        password: password
      };*/

      console.log("new currentUser=" + currentUser);

      getUserLogin({
        username: username,
        password: password
      });

      console.log("salvestatud currentUser=" + users);

      //setCurrentUser(user.users[0]);
      console.log("salvestatud currentUser=" + currentUser);

      //getUsers(username);

      setPassword("");
      const timer = setTimeout(() => {
        hideLoading();
      }, 2500);

      props.show = true;
      //hideLoading();
      return () => clearTimeout(timer);
      //showLoading();
    }
    if (currentUser)
      console.log("submite end currentUser=" + currentUser.username);
    else console.log("subite=POLE CURRENTUSERIT");
    return false;
  };

  //var input = withAutoFocus("focus", ["next"], ["prev"])(AutoFocusContainer);

  //onChange meetad iga inputi juurde
  const onChange = e =>
    setUsername({ ...currentUser, [e.target.name]: e.target.value });

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
                <form className="login__form">
                  <div action="#" className="form">
                    <div className="u-margin-bottom-medium">
                      <h2 className="heading-secondary">{t("header:login")}</h2>
                    </div>
                    <div className="form__group">
                      <input
                        type="text"
                        className="form__input"
                        placeholder={t("header:login_ph")}
                        required
                        title={t("header:login_title")}
                        autoFocus="true"
                        id="name"
                        name="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                      />
                      <label htmlFor="name" className="form__label">
                        {t("header:login_label")}
                      </label>
                    </div>

                    <div className="form__group">
                      <input
                        type="password"
                        className="form__input"
                        placeholder={t("header:password")}
                        title={t("header:login_title")}
                        required
                        id="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                      <label htmlFor="password" className="form__label">
                        {t("header:password")}
                      </label>
                    </div>

                    <div className="form__group">
                      <button
                        className="btn btn--pink btn--animated"
                        onClick={handleLogin}
                        autoFocusOrder={3}
                      >
                        {/*onClick={handleLogin}*/}
                        {t("header:login")} &rarr;
                      </button>
                    </div>

                    <div className="login__line">&nbsp;</div>

                    <div className="link__group">
                      <div className="btnlogin-inline">
                        <a href="#" className="btn-inline">
                          {t("header:register")} &rarr;
                        </a>
                      </div>
                      <div className="btnlogin-inline__right">
                        <a href="#" className="btn-inline">
                          {t("header:new_password")} &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
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
  clearCurrentUser: PropTypes.func.isRequired,
  currentUser: PropTypes.object,
  users: PropTypes.object
};

const mapStateToProps = state => ({
  //currentUser: state.user.currentUser
  user: state.user
});

export default connect(
  mapStateToProps,
  { getUserLogin, setCurrentUser, clearCurrentUser }
)(Loginpage);
