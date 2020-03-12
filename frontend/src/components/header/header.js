import React, { Component } from "react";
import "./header.scss";
import Logo from "../../static/logo.png";

import { NavLink, withRouter } from "react-router-dom";

class Nav extends Component {
  componentDidMount() {
    window.onscroll = function() {
      if (window.pageYOffset === 0) {
        document.getElementById("nav").classList.remove("navbar-shadow");
      } else {
        document.getElementById("nav").classList.add("navbar-shadow");
      }
    };
  }
  render() {
    return (
      <div id="nav" className="navbar">
        <span>
          <NavLink to="/">
            <img src={Logo} alt="Srishti Logo" />
          </NavLink>
        </span>
        <span>
          <ul className="navbar-items">
            <li className="navbar_unit">
              <NavLink className="navbar_links" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="navbar_unit">
              <NavLink className="navbar_links" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="navbar_unit">
              <NavLink className="navbar_links" to="/groups">
                Our Groups
              </NavLink>
            </li>
            <li className="navbar_unit">
              <NavLink className="navbar_links" to="/achievements">
                Achievements
              </NavLink>
            </li>
            {/*
            <li className="navbar_unit">
              <NavLink className="navbar_links" to="/team">
                Team
              </NavLink>
            </li>
          */}
          </ul>
        </span>
      </div>
    );
  }
}

export default withRouter(Nav);
