import React, { useState, useEffect, useContext } from "react";

//import React from "react";
import { connect } from "react-redux";

import LoadingContext from "../../contexts/loading.context";

import FormInput from "../../components/form-input/form-input.component";

import { getUserLogin, setLoading } from "../../redux/user/user.actions";
import {
  setCurrentUser,
  clearCurrentUser
} from "../../redux/user/user.actions";
import UserDetailsContext from "../../contexts/userDetails.context";
//import { validateAll } from 'indicative';
import { validate } from "indicative/validator";

import PropTypes from "prop-types";

//import { createStructuredSelector } from "reselect";

import { useTranslation } from "react-i18next";
//import { ifError } from "assert";

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
  const { setUserDetails } = useContext(UserDetailsContext);

  const { t, i18n } = useTranslation();
  //const [username, setUsername] = useState("");
  //const [loading, setLoading] = useState(false);
  //const [password, setPassword] = useState("");
  //const [props.show, setPropsshow] =useState(true);

  const [currentuser, setCurrentuser] = useState({
    username: "",
    password: ""
  });

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
    console.log("currentuser=" + { currentuser });
    console.log("currentUser=" + { currentUser });
    if (currentuser) {
      setCurrentUser(currentuser);
      currentUser.username = currentuser.username;
      currentUser.password = currentuser.password;
    } else if (currentUser) {
      //setUsername(currentUser.username);
      //setPassword(currentUser.password);

      setCurrentuser(currentUser);
      //setLoading(loading);
      console.log("useeffect currentUser.username=" + currentuser.username);
      console.log("useeffect currentuser.password=" + currentuser.password);
      console.log("LOADING2=" + loading);
    } //else getUserLogin((currentUser = { username: "meh", password: "pass" }));
  }, [currentUser]);

  if (loading || currentUser === null) {
    console.log("LOADING=TRUE");
    //return <h4>Loading....</h4>;
  }

  /* if (
    loading === false &&
    (currentUser !== undefined || currentUser !== null) &&
    currentuser.username !== ""
  ) {
    console.log("CURRENT=" + currentuser.username);
    console.log("LOADING2===TRUE");
    props.current(currentuser.username);
    clearCurrentUser();
    props.show = false;
    //clearCurrentUser();
    //return;
  }
*/
  const handleLogin = event => {
    event.preventDefault();
    console.log("handlelogin loginpage hetke keel:" + i18n.language);
    console.log(
      "Loginpage handleLogin event    username=" +
        currentuser.username +
        " password=" +
        currentuser.password +
        " currentuser.username=" +
        currentuser.username
    );

    /*const schema = {
      username: "required|alpha",
      password: "required|min:4|max:40"
    };

    const data1 = {
      username: "virk",
      password: "supersecret"
    };

    validate(data1, schema)
      .then(console.log)
      .catch(console.error);*/

    const rules = {
      username: "required|string|min:6",
      password: "required|string|min:6"
    };
    const data = {
      username: currentuser.username,
      password: currentuser.password
    };
    console.log("data=" + data.username + " parool=" + data.password);

    const messages = {
      required: field => `${field} is required`,
      "username.string": "Username contains unallowed characters",

      "password.min": "Password is too short"
    };

    /*const validatedData = validate(data, rules, messages)
      .then(console.log)
      .catch(console.error);
    console.log("error " + console.error);
    console.log("validated=" + validatedData);
    */
    //if (console.error !== "") return false;

    if (currentuser.username === "" || currentuser.password === "") {
      console.log("palun sisesta ikka kasutajanimi ja prool");
    } else {
      showLoading();
      //console.log("currentUser=" + currentUser);

      /*const currentUser = {
        username: username,
        password: password
      };*/

      console.log("new currentUser=" + currentuser);

      getUserLogin({
        username: currentuser.username,
        password: currentuser.password
      });

      console.log("salvestatud currentUser=" + users);

      //setCurrentUser(user.users[0]);
      console.log("salvestatud currentUser=" + currentuser);

      //getUsers(username);

      //setPassword("");
      setCurrentUser({
        ...currentuser,
        username: currentuser.username,
        password: currentuser.password
      });
      const timer = setTimeout(() => {
        hideLoading();
      }, 2500);

      setUserDetails({
        name: currentuser.username,
        dateOfBirth: "",
        email: "",
        secretQuestion: "",
        secretAnswer: ""
      });
      props.show = false;
      console.log("end " + props.show);
      //hideLoading();
      console.log("end1 handlelogin");
      props.hideThis();
      props.current();
      /*const timer1 = setTimeout(() => {
        console.log("RETURN");
      }, 200500);*/
      return () => clearTimeout(timer);
      //return true;
      //showLoading();
    }
    if (currentuser)
      console.log("submite end currentUser=" + currentuser.username);
    else console.log("subite=POLE CURRENTUSERIT");
    console.log("handle2 end");
    return false;
  };

  //var input = withAutoFocus("focus", ["next"], ["prev"])(AutoFocusContainer);

  //onChange meetad iga inputi juurde
  const onChange = e => {
    console.log(
      "onChange=  target.name=" +
        e.target.name +
        "  ja target.value=" +
        e.target.value +
        "   currentuser=" +
        currentuser
    );
    setCurrentuser({ ...currentuser, [e.target.name]: e.target.value });
    console.log(
      "onChange after username=" +
        currentuser.username +
        "  e.target.name=" +
        e.target.name
    );
    console.log({ currentuser });
  };

  const handleChange = event => {
    const { value, name } = event;
    //setState({ [name]: value });
  };

  console.log("props.show=" + props.show);

  return (
    <div className={props.show ? "modal-wrapper-show" : "modal-wrapper"}>
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

            <div className="popuplogin__right loginrow">
              {/*<a href="#" class="popup__close">
                &times;
</a>*/}
              <div className="login">
                <form className="login__form" onSubmit={handleLogin}>
                  <div action="#" className="form">
                    <div className="u-margin-bottom-medium">
                      <h2 className="heading-secondary">{t("header:login")}</h2>
                    </div>

                    <FormInput
                      type="text"
                      placeholder={t("header:login_ph")}
                      required
                      title={t("header:login_title")}
                      autoFocus={true}
                      id="name"
                      name="username"
                      value={currentuser.username}
                      onChange={onChange}
                      htmlFor="name"
                      label={t("header:login_label")}
                    ></FormInput>

                    <FormInput
                      type="password"
                      placeholder={t("header:password")}
                      title={t("header:login_title")}
                      id="password"
                      required
                      name="password"
                      htmlFor="password"
                      value={currentuser.password}
                      onChange={onChange}
                      label={t("header:password")}
                    ></FormInput>

                    <div className="form__group">
                      <button
                        className="btn btn--pink btn--animated"
                        type="submit"
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
  currentuser: PropTypes.object,
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
