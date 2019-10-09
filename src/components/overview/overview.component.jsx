import React from "react";
//import { connect } from "react-redux";
//import { createStructuredSelector } from "reselect";

import { Link } from "react-router-dom";

const Overview = ({ currentUser, hidden }) => (
  <div className="overview babysitters">
    <h1 className="overview__heading">Today our babysitters</h1>

    <div className="babysitters__friends">
      <img
        src={require("../../img/siret.jpg")}
        alt="Siret"
        className="babysitters__photo"
      />
      <img
        src={require("../../img/gerry.jpg")}
        alt="Gerry"
        className="babysitters__photo"
      />
      <img
        src={require("../../img/elina.jpg")}
        alt="Elina"
        className="babysitters__photo"
      />
      <img
        src={require("../../img/kart.jpg")}
        alt="Kärt"
        className="babysitters__photo"
      />
    </div>
  </div>
);

export default Overview;
