import React, { Component } from "react";
import "./history.scss";
import img from "../../../static/1.jpg"
export default class History extends Component {
  render() {
    return (
      <div className="History">
        <div className="title">History</div>

        <div className="HistoryDetails">
          <div className="HistoryDetailsText">
            Lorem ipsum dolor sit amet, suscipit sagittis cras accumsan enim
            quam sem, vivamus nulla mattis phasellus et interdum, cursus ipsum
            eum eros integer massa, nam magna lacinia felis. Massa nostra nulla
            imperdiet ipsum. Aliquam maecenas ultricies Lorem ipsum dolor sit
            amet, suscipit sagittis cras accumsan enim quam sem, vivamus nulla
            mattis phasellus et interdum, cursus ipsum eum eros integer massa,
            nam magna lacinia felis. Massa nostra nulla imperdiet ipsum. Aliquam
            maecenas ultricies. Felis suspendisse sit ut. Sit a semper egestas,
            ipsum justo tristique amet rutrum donec, suspendisse eros rutrum
            luctus, risus volutpat in. Nunc vitae dui, lacus et lorem id neque
            laoreet id, ut aliquam lectus nullam leo, sit libero amet. Nullam
            quis suspendisse maecenas erat donec, vestibulum donec quam id. Arcu
            augue nunc luctus lectus. Magna risus rutrum, sed venenatis
            consectetuer. Nonummy est, sed ultricies habitasse proin.
          </div>

          <div className="HistoryDetailsImage" >
            <img src = {img} alt ="History" />
          </div>
        </div>
      </div>
    );
  }
}
