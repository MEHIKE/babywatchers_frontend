import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";

//https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71

//import React from "react";
import { connect } from "react-redux";

/*import {
  getUsers,
  setCurrent,
  getUserLogin
} from "../../redux/user/user.actions";
*/
import LoadingContext from "../../contexts/loading.context";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import CustomLink from "../../components/custom-link/custom-link.component";

import { getUserLogin } from "../../redux/user/user.actions";
import {
  setCurrentUser,
  clearCurrentUser
} from "../../redux/user/user.actions";
import UserDetailsContext from "../../contexts/userDetails.context";
//import { validateAll } from "indicative";
import { validate } from "indicative/validator";

import PropTypes from "prop-types";

//import { createStructuredSelector } from "reselect";
//import LocalizedStrings from "react-localization";
//import language from "./header.json";

import { useTranslation } from "react-i18next";
import { useAuth } from "../../contexts/auth/auth";

//{ users: { currentUser, loading, users }, setCurrent, getUsers, getUserLogin }
//const Loginpage = ({ getUsers }, props) => {
const Loginpage = ({
  user: { currentUser, users, loading },
  header,
  getUserLogin,
  clearCurrentUser,
  setCurrentUser,

  ...props
}) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { setAuthTokens } = useAuth();
  //const referer = props.location.state.referer || '/';

  const [isError, setIsError] = useState(false);

  const { showLoading, hideLoading } = useContext(LoadingContext);
  const { setUserDetails } = useContext(UserDetailsContext);

  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState("");
  //const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
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

  //const textInput = useRef();

  //const focusTextInput = () => textInput.current.focus();
  useEffect(() => {
    //f (header != null) getCurrentHeader(currentHeader.username);
    // else getCurrentHeader("logimata");
    // eslint-disable-next-line
    if (currentUser) {
      setUsername(currentUser.username);
      setPassword(currentUser.password);
      setCurrentuser(currentUser);
      //setLoading(loading);
      console.log("useeffect currentUser.username=" + currentUser.username);
      console.log("useeffect currentuser.username=" + currentuser.username);
      console.log("LOADING2=" + loading);
      //focusTextInput();
    } //else getUserLogin((currentUser = { username: "meh", password: "pass" }));
    //console.log("useeffect props=" + props.show);
    //getUsers("mehike");
    // eslint-disable-next-line
  }, [currentUser]);

  if (loading || currentUser === null) {
    console.log("LOADING=TRUE");
    //return <h4>Loading....</h4>;
  }

  if (
    loading === false &&
    (currentUser !== undefined && currentUser !== null)
  ) {
    console.log("CURRENT=" + currentUser.username);
    console.log("LOADING2=TRUE");
    props.current(currentUser.username);
    clearCurrentUser();
    props.show = false;
    //clearCurrentUser();
    //return;
  }

  const handleLogin = event => {
    event.preventDefault();
    console.log("loginpage hetke keel:" + i18n.language);
    console.log(
      "Loginpage handleLogin event    username=" +
        username +
        " password=" +
        password +
        "crrentuser.username=" +
        currentuser.username
    );

    const schema = {
      username: "required|alpha",
      password: "required|min:4|max:40"
    };

    const data1 = {
      username: "virk",
      password: "supersecret"
    };

    validate(data1, schema)
      .then(console.log)
      .catch(console.error);

    /*const rules = {
      username: "required|string|min:7",
      password: "required|string|min:7"
    };*/
    const data = {
      username: currentuser.username,
      password: currentuser.password
    };
    console.log("data=" + data.username);

    /*const messages = {
      required: field => `${field} is required`,
      "username.string": "Username contains unallowed characters",

      "password.min": "Password is too short"
    };*/

    /*const formatDate = date => {
    const newDate = new Date(date).toLocaleDateString('en-US');
    const newTime = new Date(date).toLocaleTimeString('en-US');
    //console.log(`${newDate} at ${newTime}`);
    console.log({newDate} +" "+ {newTime});
}*/
    //const data1=this.state;
    //const data1=getState();

    //validateAll(data, rules, messages);
    /*      .then(() => {
        console.log("sucess");
      })
      .catch(errors => {
        console.log(errors);
      });*/
    //console.log(this.refs.username.value);
    if (currentuser.username === "" || currentuser.password === "") {
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
        username: currentuser.username,
        password: currentuser.password
      });

      console.log("salvestatud currentUser=" + users);

      //setCurrentUser(user.users[0]);
      console.log("salvestatud currentUser=" + currentUser);

      //getUsers(username);

      setPassword("");
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
      props.show = true;

      const jwt = data;
      setAuthTokens(jwt);
      setLoggedIn(true);

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
    setCurrentuser({ ...currentuser, [e.target.name]: e.target.value });

  /*const handleChange = event => {
    const { value, name } = event;
    setState({ [name]: value });
  };*/

  if (isLoggedIn) {
    return <Redirect to="/" />;
    //return <Redirect to={referer} />;
  }

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
                      required
                      id="password"
                      name="password"
                      value={currentuser.password}
                      onChange={onChange}
                      htmlFor="password"
                      label={t("header:password")}
                    ></FormInput>

                    <CustomButton type="submit">
                      {t("header:login")} &rarr;
                    </CustomButton>

                    <div className="login__line">&nbsp;</div>

                    <div className="link__group">
                      <CustomLink klass="btnlogin-inline">
                        {t("header:register")}
                      </CustomLink>
                      <CustomLink klass="btnlogin-inline__right">
                        {t("header:new_password")}
                      </CustomLink>
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
  user: state.user,
  header: state.header
});

export default connect(
  mapStateToProps,
  { getUserLogin, setCurrentUser, clearCurrentUser }
)(Loginpage);
