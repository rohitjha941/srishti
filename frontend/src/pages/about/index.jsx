import React, { Component } from "react";
import "./index.scss";
import AboutSrishti from "./Srishti/srishti";
import Domain from "./domain/domain";
import History from "./history/history";
export default class About extends Component {
  render() {
    return (
      <div className="about">
        <AboutSrishti />
        <History />
        {/* <Domain /> */}
      </div>
    );
  }
}
