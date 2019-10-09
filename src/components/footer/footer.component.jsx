import React from "react";
//import { connect } from "react-redux";
//import { createStructuredSelector } from "reselect";

//import { Link } from "react-router-dom";

const Footer = ({ currentUser, hidden }) => (
  <div className="cta">
    <h2 className="cta__book-now">
      Bad news! We have 4 childs left here. Don't be last parent!
    </h2>
    <button className="pagebtn">
      <span className="pagebtn__visible">Book now</span>
      <span className="pagebtn__invisible">Only 4 childs left</span>
    </button>
  </div>
);

export default Footer;
