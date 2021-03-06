import React, { useState, useEffect, useContext } from 'react';
//import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
//import { createStructuredSelector } from "reselect";
//import LocalizedStrings from "react-localization";
//import language from "./header.json";

import { useTranslation } from 'react-i18next';

//import { CSSTransition, TransitionGroup } from 'react-transition-group';
//import { withNamespaces } from 'react-i18next';

//import { Link } from "react-router-dom";

//import { auth } from "../../firebase/firebase.utils";
//import CartIcon from "../cart-icon/cart-icon.component";
//import CartDropdown from "../cart-dropdown/cart-dropdown.component";
//import { selectCartHidden } from "../../redux/cart/cart.selectors";
//import { selectCurrentUser } from "../../redux/user/user.selectors";

//import "./header.styles.scss";
//import { ReactComponent as Logo_reddit } from "../../img/reddit.svg";
//import { ReactComponent as Baby } from "../../img/baby_PNG51765.png";

import Loginpage from '../../pages/loginpage/loginpage.component';
import Registerpage from '../../pages/registerpage/registerpage.component';

import Logo from '../logo/logo.component';
import NewsIcon from '../widgets/News/news.component';
//import { ReactComponent as News } from "../../img/new.svg";
import { ReactComponent as Mail } from '../../img/mail.svg';
import { ReactComponent as Chat } from '../../img/chat.svg';
//import { ReactComponent as Bell } from "../../img/bell.svg";
import { ReactComponent as Role } from '../../img/mask.svg';
//import { ReactComponent as Lang } from "../../img/open-book.svg";

//import IconUmbrella from './IconUmbrella';

//import { ReactComponent as LangEST } from '../../img/Est';
//import { ReactComponent as LangENG } from '../../img/open-book.svg';

import { ReactComponent as LogOut } from '../../img/log-out.svg';
import { ReactComponent as LogIn } from '../../img/login.svg';
import { ReactComponent as Register } from '../../img/user-plus.svg';
//import Moment from "react-moment";

import PropTypes from 'prop-types';

import { getCurrentHeader } from '../../redux/header/header.actions';

import LoadingContext from '../../contexts/loading.context';
//import logo from "../../img/user.jpg";

//import Loader from "../../assets/Loader";
import BLoader from '../../assets/BarLoader';
//import UserDetailsContext from '../../contexts/userDetails.context';
import useModal from '../../utils/useModal';

import Img from 'react-image';
import Mina from '../../img/user.jpg';

import { useAuth } from '../../contexts/auth/auth';

import AuthContext from '../../contexts/auth2/authContext';

import { useHistory } from 'react-router-dom';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(
  require.context('../../images', false, /\.(gif|jpe?g|svg)$/)
);

//const Header = ({ currentUser, hidden }) => {
const Header = ({
  header: { header, loading, currentHeader },
  getCurrentHeader
  //,  pics

  //addHeader
}) => {
  //const { authTokens, setAuthTokens } = useAuth();

  const { showLoading, hideLoading } = useContext(LoadingContext);
  //const { userDetails, setUserDetails } = useContext(UserDetailsContext);
  const { t, i18n } = useTranslation();
  //const [users, setUsers] = useState([]);
  const [isShowing, setIsShowing] = useState(false);
  const { isRegister, toggle, falseRegister } = useModal();
  //const [pics, setPics] = useState("");
  const [picsurl, setPicsurl] = useState('');
  //state={ pics: "" }

  const authContext = useContext(AuthContext);
  const {
    login,
    logout,
    loadUser,
    error,
    clearErrors,
    isAuthenticated,
    user,
    token
  } = authContext;

  const history = useHistory();

  useEffect(
    () => {
      showLoading();

      console.log('isAuthenticated=' + isAuthenticated);
      if (isAuthenticated === null || !isAuthenticated) {
        //props.history.push('/');
        loadUser();
        console.log(user);
        //setAuthTokens(user);
      }

      //if (header !== null) {
      console.log(
        'AUTH-----------------------------------------------------AUTH'
      );
      //console.log(authTokens);
      if (
        //header !== null &&
        //header !== undefined &&
        //header.username !== 'logimata' &&
        //authTokens &&
        //authTokens.logedIn &&
        //authTokens.username !== 'logimata' &&
        //authTokens.username !== ''
        user &&
        user.logedIn &&
        user.username !== 'logimata' &&
        user.username !== ''
      ) {
        if (header && header.username && header.username !== user.username) {
          //getCurrentHeader(authTokens.username);
          //setAuthTokens({ username: header.username, logedIn: true });
          //login({ username: header.username, password: header.password });
        }
        // && currentHeader !== undefined) {
        console.log('headr=' + currentHeader);
        //getCurrentHeader(currentHeader.username);
        if (!currentHeader || !currentHeader.username)
          getCurrentHeader(user.username);

        //console.log(authTokens);
        //console.log('Is LOGGED IN: ' + authTokens.logedIn);
        console.log(currentHeader);
      } else {
        console.log('LOGIMATA');
        if (!currentHeader || !currentHeader.username)
          getCurrentHeader('logimata');
        console.log(currentHeader);
      }
      hideLoading();
      if (currentHeader !== null && currentHeader !== undefined) {
        console.log(
          'Header user_id=' +
            currentHeader.user_id +
            '   ' +
            currentHeader.username
        );
        /*setUserDetails({
          name: currentHeader.username,
          dateOfBirth: '',
          email: '',
          secretQuestion: '',
          secretAnswer: ''
        });*/
        console.log('header.username=' + currentHeader.username);
        //console.log('setUserDetails header=' + userDetails);
        if (currentHeader.url) currentHeader.url = '';
      } else {
        console.log('currentHeader==POLE');
        //console.log("header.currentHeader==NULL=" + header.currentHeader);
      }

      console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT1');
      if (currentHeader && currentHeader.url) {
        console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT2');
        console.log(currentHeader.url);
        setPicsurl(currentHeader.url);
        console.log(picsurl);
      }
      // eslint-disable-next-line
    },
    [] //, currentHeader.url
  );

  //  const handleCurrentUser = loginname =>
  /*  if (!loading && currentHeader && currentHeader.url) {
    console.log(currentHeader.url);
    console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT3');
                  
                    const myIcon = new Image();
                    myIcon.src = Icon;
                  
    setPicsurl(currentHeader.url);
    //this.setState({ picsurl: currentHeader.url });
    //this.setState(state => ({ picsurl: currentHeader.url }));
    console.log(picsurl);
    console.log('END setPicsurl');
  }*/

  if (loading || header === null) {
    //return <Preloader color="multi"></Preloader>;
    return <BLoader />;
    //return "<h4>Loading....</h4> <Loader></Loader>";
  }

  const handleChangeLang = event => {
    event.preventDefault();
    const { value, name } = event.target;
    //let prevLang = i18n.getLanguage();
    console.log(
      'hetke keel:' + i18n.language + ' value=' + value + ' name=' + name
    );
    let langu = i18n.language;
    langu === 'ee' ? (langu = 'en') : (langu = 'ee');
    i18n.changeLanguage(langu);
    console.log('uus keel: ' + i18n.language);
  };

  const handleLogin = event => {
    //event.preventDefault();
    //isShowing =
    console.log('header handleLogin before=' + isShowing);
    console.log(header);
    console.log(currentHeader);
    if (header != null && currentHeader.user_id === 0) setIsShowing(!isShowing);
    console.log('header handleLogin after=' + isShowing);
    //setIsShowing(isShowing);
    //return <Redirect to="/login" />;
    //React.history.push("/login");
    //return <Loginpage></Loginpage>;
  };

  const handleRegister = event => {
    //event.preventDefault();
    //isShowing =
    console.log('header handleRegister before=' + isRegister);
    console.log(header);
    console.log(currentHeader);
    if (header != null && currentHeader.user_id === 0) toggle(); //(!isShowing);
    console.log('header handleRegister after=' + isRegister);
    //setIsShowing(true);
    /*return (
      <Registerpage
        className={isRegister ? " modal-wrapper-show" : "modal - wrapper"}
        show={!isRegister}
        close={toggle}
        hideThis={toggle}
        current={handleCurrentUser}
      />
    );*/
    //setIsShowing(isShowing);
    //return <Redirect to="/login" />;
    //React.history.push("/login");
    //return <Loginpage></Loginpage>;
  };

  const handleHomepage = event => {
    console.log('handleHomepage');
    const location = {
      pathname: '/',
      state: { fromDashboard: true }
    };
    history.push(location);
    history.push('/');
    console.log('handleHomepage');
  };

  const handleRole = event => {
    console.log('handleRole');
    const location = {
      pathname: '/admin',
      state: { fromDashboard: true }
    };
    history.push(location);
    //history.push('/');
    console.log('handleRole');
  };

  const handleLogout = event => {
    event.preventDefault();
    localStorage.setItem('tokens', null);
    header = null;
    currentHeader = null;
    //setAuthTokens();
    logout();
    getCurrentHeader('logimata');
    console.log('header handleLogin=' + isShowing);
  };

  const handleCurrentUser = loginname => {
    getCurrentHeader(loginname);
    setIsShowing(false);
  };

  if (isShowing) {
  }

  const hideLogin = () => {
    setIsShowing(false);
  };

  const hideRegister = () => {
    falseRegister();
  };

  if (currentHeader) {
    /*const importAll = require =>
      require.keys().reduce((acc, next) => {
        acc[next.replace('./', '')] = require(next);
        return acc;
      }, {});

    console.log(importAll);
    const images = importAll(
      require.context('./img', false, /\.(png|jpe?g|svg)$/)
    );*/

    // Import all images in image folder

    console.log('images');
    console.log(images);
  }
  /*if (currentHeader) {
    const testFolder = './';
    const fs = require('fs');
    const path = require('path');

    const allowedExts = [
      '.jpg' // add any extensions you need
    ];

    const modules = {};

    console.log('fs=' + fs + ' path=' + path);
    console.log(fs);
    console.log(path);

    const files = fs.readdirSync(testFolder);

    //const myImage = require('../../user.jpg');

    if (files && files.length) {
      files
        .filter(file => allowedExts.indexOf(path.extname(file)) > -1)
        .forEach(
          file =>
            (exports[
              path.basename(file, path.extname(file))
            ] = require(`./${file}`))
        );
    }
    console.log(files);
    module.exports = modules;
  }*/

  return (
    <div>
      {isShowing ? (
        <Loginpage
          className={isShowing ? 'modal-wrapper-show' : 'modal-wrapper'}
          show={isShowing}
          close={handleLogin}
          hideThis={hideLogin}
          current={handleCurrentUser}
        >
          Login
        </Loginpage>
      ) : (
        ''
      )}
      <Registerpage
        className={isRegister ? 'modal-wrapper-show' : 'modal-wrapper'}
        show={isRegister}
        close={handleRegister}
        hideThis={hideRegister}
        current={handleCurrentUser}
      >
        Register
      </Registerpage>
      <header className='page_header'>
        {/*isShowing && <Loginpage></Loginpage>*/}
        {console.log(currentHeader)}
        <nav className='user-nav'>
          <div onClick={handleHomepage}>
            <Logo
              onClick={handleHomepage}
              company={
                currentHeader !== undefined && currentHeader.company
                  ? currentHeader.company
                  : t('header:bw')
              }
            ></Logo>
          </div>
        </nav>
        <span className='my-spacer'> </span>

        <nav className='user-nav user-nav__right'>
          <NewsIcon tooltip={t('header:news')} number='!'></NewsIcon>

          {currentHeader !== undefined && currentHeader.company && (
            <div className='user-nav__icon-box tooltip'>
              <span className='tooltiptext'>{t('header:mails')}</span>
              <Mail className='user-nav__icon'></Mail>
              <span className='user-nav__notification'>7</span>
            </div>
          )}

          {currentHeader !== undefined && currentHeader.company && (
            <div className='user-nav__icon-box tooltip'>
              <span className='tooltiptext'>{t('header:chats')}</span>
              <Chat className='user-nav__icon'></Chat>
              <span className='user-nav__notification'>13</span>
            </div>
          )}

          {/*<div className="user-nav__icon-box tooltip">
          <span className="tooltiptext">
            {t("header:noti")}
            {
              //collections.map(({ id, ...otherCollectionProps }) => (
              //<CollectionPreview key={id} {...otherCollectionProps} />
              //collections: FIRST_DATA;
              //<span className="title">{collections.id}</span>
              //<span className="price">{collection.price}</span>
              //)//)
            }
            {console.log("COLLECTIONS: ")}
          </span>
          <Bell className="user-nav__icon"></Bell>
          <span className="user-nav__notification">3</span>
          </div>*/}
        </nav>

        <nav className='user-nav user-nav__right'>
          {currentHeader !== undefined && currentHeader.company && (
            <div className='user-nav__user' to='/'>
              {/*setPicsurl("../../img/" + currentHeader.url)*/}
              {console.log(`picsurl=  ${picsurl}`)}
              {console.log('currentheader.url=' + images[currentHeader.url])}
              {console.log('picsurl ise=' + picsurl)}

              {currentHeader.url && (
                <>
                  {images && (
                    <img
                      src={images[currentHeader.url]}
                      alt='User -> '
                      className='user-nav__user-photo'
                    />
                  )}
                  {/*<img
                    src={Mina}
                    alt='User pic'
                    className='user-nav__user-photo'
                  />*/}
                </>
              )}

              <span className='user-nav__user-name'>
                {!loading && header.lenght === 0 ? (
                  <p>{t('header:login')}</p>
                ) : (
                  /*header.map(user => (
                  <li key={user.username}>
                    {user.firstname}{" "}
                    <Moment format="DD MMMM YYYY">{user.bday}</Moment>
                  </li>
                ))*/
                  header.username
                )}
                {/*t("header:father")*/}
                {console.log(header)}
              </span>
            </div>
          )}
          {currentHeader !== undefined &&
            currentHeader.company &&
            currentHeader.last_active_rolename && (
              <div className='user-nav__user' onClick={handleRole}>
                <Role className='user-nav__user-photo user-nav__icon__role'></Role>

                <span className='user-nav__user-name'>
                  {currentHeader.last_active_rolename}
                  {/*t("header:role")*/}
                </span>
              </div>
            )}

          <div className='user-nav__user' to='/' onClick={handleChangeLang}>
            {/*<Lang className='user-nav__user-photo user-nav__icon__role'></Lang>*/}
            <img
              src={require('../../img/' +
                (i18n.language === 'ee' ? 'Estonia' : 'english') +
                '.png')}
              alt='Lang'
              className='user-nav__user-lang user-nav__icon__lang'
            ></img>
            <span className='user-nav__user-name'>{t('header:lang')}</span>
          </div>

          {currentHeader !== undefined && currentHeader.company ? (
            <div className='user-nav__user' to='/logout' onClick={handleLogout}>
              <LogOut className='user-nav__user-photo user-nav__icon__out'></LogOut>
              <span className='user-nav__user-name'>{t('header:logout')}</span>
            </div>
          ) : (
            <div className='user-nav__user' to='/login' onClick={handleLogin}>
              <LogIn className='user-nav__user-photo user-nav__icon__out'></LogIn>
              <span className='user-nav__user-name'>{t('header:login')}</span>
            </div>
          )}

          {currentHeader === undefined ||
            (!currentHeader.company && (
              <div
                className='user-nav__user'
                to='/register'
                onClick={handleRegister}
              >
                <Register className='user-nav__user-photo user-nav__icon__out'></Register>
                <span className='user-nav__user-name'>
                  {t('header:register')}
                </span>
              </div>
            ))}
        </nav>
        {/*<Link className="options">
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
        {/*</Link>*/}
        {/*hidden ? null : <CartDropdown />*/}
      </header>
    </div>
  );
};

/*
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
*/

Header.propTypes = {
  header: PropTypes.object.isRequired,
  getCurrentHeader: PropTypes.func.isRequired
  //addHeader: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  header: state.header,
  isShowing: state.isShowing,
  currentHeader: state.currentHeader,
  picsurl: state.picsurl
});

export default connect(
  mapStateToProps,
  { getCurrentHeader }
)(Header);
