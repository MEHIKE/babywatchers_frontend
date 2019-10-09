import React from "react";
//import { connect } from "react-redux";
//import { createStructuredSelector } from "reselect";

//import { Link } from "react-router-dom";

const PageDetail = ({ currentUser, hidden }) => (
  <div className="page_detail">
    <div className="page_description">
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
        dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut
        corporis incidunt deserunt quae architecto voluptate.
      </p>
      <p className="paragraph">
        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto
        voluptate delectus, inventore iure aliquid aliquam.
      </p>
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
          Lucy and 3 other friends recommend this Babywatch.
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
        Show all <span>&rarr;</span>
      </button>
    </div>
  </div>
);

export default PageDetail;
