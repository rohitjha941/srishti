import "./home.scss";
import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import Title from "../../components/title/title";
import Text from "../../components/text/text";
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-landing">
          <Title>Easel for <br/>Unbridled Ideas</Title>

          <Text>
            Srishti is the Annual Technical Exhibition of IIT Roorkee that aims
            towards integrating all realms of technical activities conducted
            within the R-land.
            <br />
            <br />
            Since its inception in 1958, Srishti has inspired the brilliant
            minds of our institute to come up with creative ideas and practical
            innovations.
          </Text>

          <button className="home-register">Register</button>
        </div>

        <div className="home-testimonial">
          <div>
            <img src={require("../../static/dean.png")} alt = "Desn SRIC" />
            <Text white={true}>
              <b>
                <center>
                  Prof. Manish Shrikhande
                  <br />
                  Dean SRIC
                </center>
              </b>
            </Text>
          </div>

          <div className="home-testimonial-text">
            Nostrud est eu elit nostrud in irure. Velit anim amet tempor
            exercitation pariatur nisi labore laboris voluptate non. Amet
            consectetur dolore commodo qui. Consequat aliqua esse et et deserunt
            consectetur laborum duis amet labore ullamco commodo. Elit voluptate
            cupidatat adipisicing ullamco culpa. Esse mollit irure deserunt
            exercitation dolor enim sint enim. Quis exercitation aliqua amet qui
            elit sunt sunt ad quis. Occaecat nulla labore ex laborum nostrud
            magna duis ullamco. Pariatur elit incididunt do proident incididunt
            incididunt irure ut. Reprehenderit qui laboris eu occaecat commodo
            eu minim ut id et. Est Lorem sint irure ad aliquip anim culpa nulla
            qui tempor. Minim do in duis aute occaecat elit culpa nulla
            incididunt. Dolor irure magna nostrud id labore elit esse deserunt
            tempor id et. Lorem dolor magna quis qui deserunt eiusmod aliquip
            Lorem velit veniam culpa ex. Labore labore nisi exercitation tempor
            cupidatat et. Esse do duis do cupidatat consectetur ullamco deserunt
            officia. Enim adipisicing id aliquip consectetur tempor minim elit
            adipisicing ipsum adipisicing nisi ipsum non. Excepteur minim cillum
            ut Lorem nisi. Velit pariatur enim minim dolore consequat.
          </div>

          <div className="home-stats">
            <img src={require("../../static/stats.png")} alt="stats" />
          </div>
        </div>
      </div>
    );
  }
}
