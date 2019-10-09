import React from "react";
//import { connect } from "react-redux";
//import { createStructuredSelector } from "reselect";
import LocalizedStrings from "react-localization";
import language from "./header.json";

//import { Link } from "react-router-dom";

//import { auth } from "../../firebase/firebase.utils";
//import CartIcon from "../cart-icon/cart-icon.component";
//import CartDropdown from "../cart-dropdown/cart-dropdown.component";
//import { selectCartHidden } from "../../redux/cart/cart.selectors";
//import { selectCurrentUser } from "../../redux/user/user.selectors";

//import "./header.styles.scss";
import { ReactComponent as Logo } from "../../img/reddit.svg";
import { ReactComponent as News } from "../../img/new.svg";
import { ReactComponent as Mail } from "../../img/mail.svg";
import { ReactComponent as Chat } from "../../img/chat.svg";
import { ReactComponent as Bell } from "../../img/bell.svg";
import { ReactComponent as Role } from "../../img/mask.svg";
import { ReactComponent as Lang } from "../../img/open-book.svg";
import { ReactComponent as LogOut } from "../../img/log-out.svg";
//import mySvg from "../../img/log-out.svg";

//export default getHeaderData;

let strings = new LocalizedStrings(language);
let lang = "";
//let test = strings.setLanguage(language).getHeaderData;

const Header = ({ currentUser, hidden }) => {
  const handleChangeLang = event => {
    event.preventDefault();
    const { value, name } = event.target;
    lang = value;
    console.log("lang=" + value + " name=" + name);
    //strings = new LocalizedStrings(language);
    //this.setState({ [name]: value });
    console.log("enne, strings.getlanguage=" + strings.getLanguage());
    strings.getLanguage() === "ee"
      ? strings.setLanguage("en")
      : strings.setLanguage("ee");

    lang === "ee" ? (lang = "en") : (lang = "ee");

    console.log("strings=" + strings);
    console.log("strings.availablelangs=" + strings.getAvailableLanguages());
    console.log("strings.getlanguage=" + strings.getLanguage());
    console.log("strings.bw=" + strings.bw);
    //strings = new LocalizedStrings(language);
    //history.push();
  };

  lang === "" ? strings.setLanguage("ee") : strings.setLanguage(lang);
  lang === "" ? (lang = "ee") : (lang = "en");
  console.log(strings.bw);

  return (
    <header className="page_header">
      <nav className="user-nav">
        <div className="user-nav__icon-box" to="/">
          <Logo className="icon-red feature__icon header__logo logo"></Logo>
          <span className="user-nav__user-name">
            {strings.bw}+{strings.getLanguage()}
          </span>
        </div>
        {/*<span class="user-nav__user-name">Babywatcher lastehoid</span>*/}
      </nav>
      <span className="my-spacer"> </span>

      <nav className="user-nav user-nav__right">
        <div className="user-nav__icon-box tooltip">
          <span className="tooltiptext">{strings.news}</span>
          <News className="user-nav__icon"></News>
          <span className="user-nav__notification">1</span>
        </div>

        <div className="user-nav__icon-box tooltip">
          <span className="tooltiptext">{strings.mails}</span>
          <Mail className="user-nav__icon"></Mail>
          <span className="user-nav__notification">7</span>
        </div>

        <div className="user-nav__icon-box tooltip">
          <span className="tooltiptext">{strings.chats}</span>
          <Chat className="user-nav__icon"></Chat>
          <span className="user-nav__notification">13</span>
        </div>

        <div className="user-nav__icon-box tooltip">
          <span className="tooltiptext">{strings.noti}</span>
          <Bell className="user-nav__icon"></Bell>
          <span className="user-nav__notification">3</span>
        </div>
      </nav>

      <nav className="user-nav user-nav__right">
        <div className="user-nav__user" to="/">
          <img
            src={require("../../img/user.jpg")}
            alt="User pic"
            className="user-nav__user-photo"
          />
          <span className="user-nav__user-name">Rünno Ruul, isa</span>
        </div>

        <div className="user-nav__user" to="/">
          <Role className="user-nav__user-photo user-nav__icon__role"></Role>
          <span className="user-nav__user-name">{strings.role}</span>
        </div>

        <div className="user-nav__user" to="/" onClick={handleChangeLang}>
          <Lang className="user-nav__user-photo user-nav__icon__role"></Lang>
          <span className="user-nav__user-name">{strings.lang}</span>
        </div>

        <div className="user-nav__user" to="/">
          <LogOut className="user-nav__user-photo user-nav__icon__out"></LogOut>
          {/*<img
            src={mySvg}
            className="user-nav__user-photo user-nav__icon__role"
          ></img>*/}

          <span className="user-nav__user-name">{strings.logout}</span>
        </div>
      </nav>
      {/*<div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
</Link>*/}
      {/*currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )*/}
      {/*<CartIcon />*/}
      {/*</div>*/}
      {/*hidden ? null : <CartDropdown />*/}
    </header>
  );
};

/*const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
*/
export default Header;
