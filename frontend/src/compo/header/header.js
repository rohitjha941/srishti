import React, { Component } from "react";
import "./header.scss";
import Logo from "../../static/logo.png";
import { OAuthRedirect } from "../../const";

import { NavLink, withRouter } from "react-router-dom";
import { Menu, Dropdown, Icon } from "antd";

const menu = (
  <Menu>
    <Menu.Item>
      <NavLink   to="/Myaccount">
        My Certificates 
      </NavLink>
    </Menu.Item>

    <Menu.Item>
      <NavLink  to="/logout">
        Logout
      </NavLink>
    </Menu.Item>
  </Menu>
);
class Nav extends Component {
  componentDidMount() {
    var height = document.getElementById("nav").offsetHeight;
    height = height + "px";

    document.getElementById("body").style.paddingTop = height;

    window.onscroll = function() {
      if (window.pageYOffset === 0) {
        document.getElementById("nav").classList.remove("navbar-shadow");
      } else {
        document.getElementById("nav").classList.add("navbar-shadow");
      }
    };
  }
  render() {
    let login = (
      <li className="navbar_unit" >
        <a href={OAuthRedirect}>Login</a>
      </li>
    );

    if (this.props.user !== null && this.props.user !== undefined ) {
      login = (
        <Dropdown placement="bottomRight" overlay={menu}>
          <li className="navbar_unit" id="login">
            <a>
              {this.props.user.first_name.substr(
                0,
                this.props.user.first_name.indexOf(" "),
              )}
              &nbsp;
              <Icon type="down" />
            </a>
          </li>
        </Dropdown>
      );
    }
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
              <NavLink className = "navbar_links" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="navbar_unit">
              <NavLink className = "navbar_links" to="/about"> About Us </NavLink>
            </li>
            <li className="navbar_unit">
              <NavLink className = "navbar_links" to="/groups"> Our Groups </NavLink>
            </li>
            <li className="navbar_unit">
              <NavLink className = "navbar_links" to="/achievements"> Achievements </NavLink>
            </li>

            <li className="navbar_unit">
              <NavLink className = "navbar_links" to="/team"> Team </NavLink>
            </li>
            {login}
          </ul>
        </span>
      </div>
    );
  }
}

export default withRouter(Nav);
