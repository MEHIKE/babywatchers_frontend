import React from "react";
//import { connect } from "react-redux";
//import { createStructuredSelector } from "reselect";

import { Link } from "react-router-dom";

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
import mySvg from "../../img/log-out.svg";

const Header = ({ currentUser, hidden }) => (
  <header className="page_header">
    <nav className="user-nav">
      <div className="user-nav__icon-box" to="/">
        <Logo className="icon-red feature__icon header__logo logo"></Logo>
        <span className="user-nav__user-name">Babywatcher lastehoid</span>
      </div>
      {/*<span class="user-nav__user-name">Babywatcher lastehoid</span>*/}
    </nav>
    <span className="my-spacer"> </span>

    <nav className="user-nav user-nav__right">
      <div className="user-nav__icon-box tooltip">
        <span className="tooltiptext">Uudised</span>
        <News className="user-nav__icon"></News>
        <span className="user-nav__notification">1</span>
      </div>

      <div className="user-nav__icon-box tooltip">
        <span className="tooltiptext">Kirjad</span>
        <Mail className="user-nav__icon"></Mail>
        <span className="user-nav__notification">7</span>
      </div>

      <div className="user-nav__icon-box tooltip">
        <span className="tooltiptext">Sõnumid</span>
        <Chat className="user-nav__icon"></Chat>
        <span className="user-nav__notification">13</span>
      </div>

      <div className="user-nav__icon-box tooltip">
        <span className="tooltiptext">Teated</span>
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
        <span className="user-nav__user-name">Administrator</span>
      </div>

      <div className="user-nav__user" to="/">
        <Lang className="user-nav__user-photo user-nav__icon__role"></Lang>
        <span className="user-nav__user-name">Eesti</span>
      </div>

      <div className="user-nav__user" to="/">
        <LogOut className="user-nav__user-photo user-nav__icon__out"></LogOut>
        {/*<img
            src={mySvg}
            className="user-nav__user-photo user-nav__icon__role"
          ></img>*/}

        <span className="user-nav__user-name">Logi välja</span>
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

/*const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
*/
export default Header;
