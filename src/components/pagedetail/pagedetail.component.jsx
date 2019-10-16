import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import Overview from "../overview/overview.component";
//import { connect } from "react-redux";
//import { createStructuredSelector } from "reselect";

//import { Link } from "react-router-dom";

const PageDetail = ({ currentUser, hidden }) => {
  const { t, i18n } = useTranslation();

  return (
    <Fragment>
      <Overview></Overview>
      <div className="page_detail">
        <div className="page_description">
          <p className="paragraph">{t("translations:news1")}</p>
          <p className="paragraph">{t("translations:news2")}</p>
          <ul className="list">
            <li className="list__item">Close to the city center</li>
            <li className="list__item">Breakfast included</li>
            <li className="list__item">Free</li>
            <li className="list__item">Free</li>
            <li className="list__item">Kuivd ja soojad ruumid</li>
            <li className="list__item">Lahked kasvatajad</li>
            <li className="list__item">We speak all languages</li>
            <li className="list__item">Perfect for all families</li>
          </ul>
          <div className="recommend">
            <p className="recommend__count">
              {t("translations:recommend", { number: 3 })}
            </p>
          </div>
        </div>

        <div className="page_user-reviews">
          <figure className="review">
            <blockquote className="review__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              doloremque architecto dicta animi, totam, itaque officia ex.
            </blockquote>
          </figure>

          <figure className="review">
            <blockquote className="review__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              doloremque architecto dicta animi.
            </blockquote>
          </figure>

          <button className="btn-inline">
            {t("common:showall")} <span>&rarr;</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default PageDetail;
