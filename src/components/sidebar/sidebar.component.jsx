import React, { useContext, useEffect } from 'react';
//import { connect } from "react-redux";
//import { createStructuredSelector } from "reselect";

import { useTranslation } from 'react-i18next';

import UserDetailsContext from '../../contexts/userDetails.context';
import LoadingContext from '../../contexts/loading.context';

import { Link } from 'react-router-dom';

import { ReactComponent as Users1 } from '../../img/users1.svg';
import { ReactComponent as Cake } from '../../img/cake.svg';
import { ReactComponent as Calendar } from '../../img/calendar.svg';
import { ReactComponent as Image } from '../../img/image.svg';
import { ReactComponent as Users } from '../../img/users.svg';
import { ReactComponent as Coin } from '../../img/coin-euro.svg';
import { ReactComponent as Wrench } from '../../img/wrench.svg';

const Sidebar = ({ currentUser, hidden }) => {
  const { t, i18n } = useTranslation();

  const { showLoading, hideLoading } = useContext(LoadingContext);
  const { userDetails, setUserDetails } = useContext(UserDetailsContext);
  const isPublic = false;

  useEffect(() => {
    //f (header != null) getCurrentHeader(currentHeader.username);
    // else getCurrentHeader("logimata");
    // eslint-disable-next-line
    if (userDetails) {
      isPublic = true;
    }
  });

  return (
    <nav className='page_sidebar'>
      <ul className='side-nav'>
        {isPublic || (
          <li className='side-nav__item side-nav__item--active'>
            <Link to='#' className='side-nav__link'>
              <Users1 className='side-nav__icon'></Users1>
              {/*<svg class="side-nav__icon">
            <use xlink:href="img/icons.svg#icon-users1"></use>
            </svg>*/}
              <span>{t('menus:childs')}</span>
            </Link>
          </li>
        )}
        {isPublic || (
          <li className='side-nav__item'>
            <Link to='#' className='side-nav__link'>
              <Cake className='side-nav__icon'></Cake>
              <span>{t('menus:what')}</span>
            </Link>
          </li>
        )}
        <li className='side-nav__item'>
          <Link to='#' className='side-nav__link'>
            <Calendar className='side-nav__icon'></Calendar>
            <span>{t('menus:cal')}</span>
          </Link>
        </li>
        <li className='side-nav__item'>
          <Link to='#' className='side-nav__link'>
            <Image className='side-nav__icon'></Image>
            <span>{t('menus:galery')}</span>
          </Link>
        </li>
        <li className='side-nav__item'>
          <Link to='#' className='side-nav__link'>
            <Users className='side-nav__icon'></Users>
            <span>{t('menus:sitters')}</span>
          </Link>
        </li>
        <li className='side-nav__item'>
          <Link to='#' className='side-nav__link'>
            <Coin className='side-nav__icon'></Coin>
            <span>{t('menus:money')}</span>
          </Link>
        </li>
        <li className='side-nav__item'>
          <Link to='#' className='side-nav__link'>
            <Wrench className='side-nav__icon'></Wrench>
            <span>{t('menus:settings')}</span>
          </Link>
        </li>
      </ul>

      <div className='legal'>&copy; 2019 by Rünno. All rights reserved.</div>
    </nav>
  );
};

export default Sidebar;
