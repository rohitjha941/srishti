import React, { Component } from "react";
import Title from "../../components/title/title";
import Text from "../../components/text/text";
import "./ach.scss";
export default class Achievement extends Component {
  render() {
    return (
      <>
        <div className="achievements">
          <Title>We win.</Title>
          <Text>
            <p>
              2nd position, National Robotics Challenge 2017 <br />
              Aditya Peshin, 2nd prize of $150, Oral Presentation Competition
              SPDC 2016
              <br />
              Team Robocon, 7th place, Best Innovative Design Award 2018.
              <br />
              IITR bagged more than 30 GSoC selections and 2 Outreachy
              selections in 2018
              <br />
              Team SDSlabs, Finalist, Microsoft Imagine Cup 2018 <br />
              Winners, World Data Science Competition <br />
              World Finalist, Valeo Innovation Challenge 2017 <br />
              Global Winners, Go Green City Challenge 2017 <br />
              SDS InfoSecIITR won the CSAW CTF 2018 India zonals, and stood
              among the top 10 in the world <br />
              SDS PAG qualified for ACM ICPC World Finals 6th year in a row{" "}
              <br />
            </p>
          </Text>
        </div>
        <img
          src={require("../../static/ach-medals.png")}
          style={{ width: "100%", marginBottom: "-0.9375rem" }}
          alt=""
        />
      </>
    );
  }
}
