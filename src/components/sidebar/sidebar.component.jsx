import React from "react";
//import { connect } from "react-redux";
//import { createStructuredSelector } from "reselect";

import { Link } from "react-router-dom";

import { ReactComponent as Users1 } from "../../img/users1.svg";
import { ReactComponent as Cake } from "../../img/cake.svg";
import { ReactComponent as Calendar } from "../../img/calendar.svg";
import { ReactComponent as Image } from "../../img/image.svg";
import { ReactComponent as Users } from "../../img/users.svg";
import { ReactComponent as Coin } from "../../img/coin-euro.svg";
import { ReactComponent as Wrench } from "../../img/wrench.svg";

const Sidebar = ({ currentUser, hidden }) => (
  <nav className="page_sidebar">
    <ul className="side-nav">
      <li className="side-nav__item side-nav__item--active">
        <Link to="#" className="side-nav__link">
          <Users1 className="side-nav__icon"></Users1>
          {/*<svg class="side-nav__icon">
            <use xlink:href="img/icons.svg#icon-users1"></use>
            </svg>*/}
          <span>Sinu lapsed</span>
        </Link>
      </li>
      <li className="side-nav__item">
        <Link to="#" className="side-nav__link">
          <Cake className="side-nav__icon"></Cake>
          <span>Mis toimub täna</span>
        </Link>
      </li>
      <li className="side-nav__item">
        <Link to="#" className="side-nav__link">
          <Calendar className="side-nav__icon"></Calendar>
          <span>Sündmused</span>
        </Link>
      </li>
      <li className="side-nav__item">
        <Link to="#" className="side-nav__link">
          <Image className="side-nav__icon"></Image>
          <span>Galerii</span>
        </Link>
      </li>
      <li className="side-nav__item">
        <Link to="#" className="side-nav__link">
          <Users className="side-nav__icon"></Users>
          <span>Kasvatajad</span>
        </Link>
      </li>
      <li className="side-nav__item">
        <Link to="#" className="side-nav__link">
          <Coin className="side-nav__icon"></Coin>
          <span>Arveldus</span>
        </Link>
      </li>
      <li className="side-nav__item">
        <Link to="#" className="side-nav__link">
          <Wrench className="side-nav__icon"></Wrench>
          <span>Seaded</span>
        </Link>
      </li>
    </ul>

    <div className="legal">&copy; 2019 by Rünno. All rights reserved.</div>
  </nav>
);

export default Sidebar;
