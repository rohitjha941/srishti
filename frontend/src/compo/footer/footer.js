import React, { Component } from "react";
import "./footer.scss";
import iitr from "../../static/iitr.png";
import stc from "../../static/stc.png";
import srishti from "../../static/srishti.png";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="logo logo-border-right">
          <a target ="_blank"  rel="noopener noreferrer" href="http://iitr.ac.in">
            <img src={iitr} alt="IIT Roorkee Logo" />
          </a>
        </div>

        <div className="logo logo-border-right  ">
          <img src={stc} alt="STC Logo" />
        </div>

        <div className="logo">
          <img src={srishti} alt="Srishti Logo" />
        </div>

        <div className="footer-coordinator">
          <p className="header">Overall Coordinator</p>
          <p className="name">Anant Vashistha</p>
          <p className="email"> oc.srishti@iitr.ac.in</p>
        </div>

        <div className="footer-coordinator">
          <p className="header">Faculty Advisor</p>
          <p className="name">Prof. Avlokita Agarwal</p>
          <p className="email">avliafap@iitr.ac.in</p>
        </div>

        <div className="footer-links">
          <a target ="_blank"  rel="noopener noreferrer"  href="https://www.facebook.com/iitrsrishti/">FACEBOOK</a>
          <a target ="_blank"  rel="noopener noreferrer" href="https://www.linkedin.com/company/srishti-iit-roorkee/">
            LINKEDIN
          </a>
          <a target ="_blank"  rel="noopener noreferrer"  href="https://iitr.ac.in">IITR WEBSITE</a>
        </div>
      </div>
    );
  }
}
