import React, { Component } from "react";
import "./header.scss";
import Logo from  "../../static/logo.png"

import { NavLink,withRouter } from "react-router-dom";
 class Nav extends Component {
  
    componentDidMount(){
        var height = document.getElementById("nav").offsetHeight;
        height = height + "px";
    
        document.getElementById("body").style.paddingTop = height;
    }
  render() {
    return (
      <div id ="nav" className="navbar">
        <span>
            <NavLink to ="/" > 
              <img src = {Logo} alt = "Srishti Logo" />
            </NavLink>    
        </span>

        <span>
          <ul className="navbar-items">
            <li>
              <NavLink to="/about">About Us </NavLink>
            </li>

            <li>
              <NavLink to="/groups">Our Groups</NavLink>
            </li>

            <li>
              <NavLink to="/achievements">Achievements</NavLink>
            </li>
          </ul>
        </span>
      </div>
    );
  }
}


export default withRouter(Nav);