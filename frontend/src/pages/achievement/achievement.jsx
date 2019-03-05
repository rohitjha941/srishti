import React, { Component } from "react";
import "./ach.scss";
import Top from "../../static/achievement/InterIIT.jpg";
import Chart from "../../static/achievement/chart.png";
import Prize from "../../static/achievement/prize.png";

export default class Achievement extends Component {
  render() {
    return (
      <div>
        <img style={{ width: "100%" }} src={Top} alt="" />

        <div className="ach">
          <div className="title2">IIT Roorkee Tech. Achievements</div>
          <div className="ach-array">
            <div>
              <ul>
                <li>
                  Team IRC, 2nd position, National Robotics Challenge 2017
                </li>
                <li>
                  Aditya Peshin, 2nd prize of $150, Oral Presentation
                  Competition SPDC 2016
                </li>
                <li>
                  Team Robocon, 7th place, Best Innovative Design Award 2018.
                </li>
                <li>
                  IITR bagged more than 30 GSoC selections and 2 Outreachy
                  selections in 2018
                </li>
                <li>Team SDSlabs, Finalist, Microsoft Imagine Cup 2018</li>
                <li>Winners, World Data Science Competition </li>
                <li>World Finalist, Valeo Innovation Challenge 2017</li>
                <li>Global Winners, Go Green City Challenge 2017</li>
                <li>
                  SDS InfoSecIITR won the CSAW CTF 2018 India zonals, and stood
                  among the top 10 in the world
                </li>
                <li>
                  SDS PAG qualified for ACM ICPC World Finals 6th year in a row
                </li>

                <p className="many-more">And many more...</p>
              </ul>
            </div>
          </div>
        </div>

        <div className="ach-flow-chart">
          <div className="title2">Inter-IIT Tech. Achievements</div>
          <center>
            <img src={Chart} alt="Achievement Chart " />
          </center>
        </div>

        <div className="ach-flow-chart">
          <div className="title2">Tech Meet 2018-19 </div>
          <center>
            <img src={Prize} alt="Prizes list" />
          </center>
        </div>
      </div>
    );
  }
}
