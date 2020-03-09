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
          <Title>Easel for Unbridled Ideas</Title>

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
            <img src={require("../../static/dean.JPG")} />
            <Text white={true}>
              <b>
                <center>
                  Prof. Manoranjan Parida
                  <br />
                  Dean SRIC
                </center>
              </b>
            </Text>
          </div>

          <div className="home-testimonial-text">
            Being compatriots of this institution, we have always worked on our
            esoteric ideas and walked on unconventional paths. In fact, an event
            like Srishti is an easel on which students paint with colours of
            unbridled ideas. We are committed to edifying the young talented
            minds of this modern order. Srishti 2019 adds a bright chapter in a
            promise to make IIT Roorkee a druid among all the institutes of
            higher education. Groups in Srishti have not only participated to
            win but to brush away the fear of being lampooned of the inefficacy.
            Viewer's astonishment was the fact that Knox's automobiles have
            successfully outmanoeuvred all the terrains and Physics and
            Astronomy Club promises that one of the genii in theoretical physics
            can come from IIT Roorkee too.
            <br />
            <br />I acknowledge the hard work of Team Srishti 2020 for setting
            up a new bar and we are ready for a dynamic event.
          </div>
        
          <div>
          
          
          </div>
        </div>

      </div>
    );
  }
}
