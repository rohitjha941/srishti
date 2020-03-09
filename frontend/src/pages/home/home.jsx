import "./home.scss";
import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import Title from "../../compo/title/title";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-landing">
          <title>Easel for Unbridled Ideas</title>
        </div>
      </div>
    );
  }
}
