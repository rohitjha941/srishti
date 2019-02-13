import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import AboutSrishti from "./Srishti/srishti";
import { Route, Redirect } from "react-router-dom";
import Domain from "./domain/domain";
import History from "./history/history";
import Stat from "./stat/stat";

import Slider from "react-slick"; 

export default class About extends Component {
  render() {

 


    return (
      <div className="about">
        <div className="about-sidebar">
          <nav>
            <NavLink activeClassName="about-sidebar-active" to="/about/srishti">
              About&nbsp;&nbsp;Srishti
            </NavLink>
            <NavLink activeClassName="about-sidebar-active" to="/about/domain">
              Domain
            </NavLink>
            <NavLink activeClassName="about-sidebar-active" to="/about/history">
              History
            </NavLink>
            <NavLink
              activeClassName="about-sidebar-active"
              to="/about/statistic"
            >
              Statistic
            </NavLink>
          </nav>
        </div>

        <div className="about-pages">
          <Route path="/about/srishti" component={AboutSrishti} />
          <Route path="/about/domain" component={Domain} />
          <Route path="/about/history" component={History} />
          <Route path="/about/statistic" component={Stat} />


    {/*<Redirect exact from="/about" to="/about/srishti" />*/}
        </div>
      </div>
    );
  }
}
