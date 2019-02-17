import React, { Component } from "react";
import "./history.scss";
import img from "../../../static/1.jpg";
export default class History extends Component {
  render() {
    return (
      <div className="History">
        <div className="title">VISION</div>

        <div className="HistoryDetails">
          <div className="HistoryDetailsText">
            In the times where our nation is witnessing robust economic growth,
            IIT Roorkee strives to unleash the untapped potential of bright
            young minds. Burgeoning up the path, IIT Roorkee has achieved the
            grandeur of success owing to extravagant events like Srishti which
            create inclusive and creative platforms for the manifestation of
            skills and calibre of its students. At Srishti, creativity and
            technology are contextualized and students learn to implement
            concepts gathered in the classrooms. Srishti, the Annual Technical
            Exhibition of IIT Roorkee, aims to demarcate to society a plethora
            of innovations and cutting edge technology used in a premier
            technological institute of the nation. It also aims to inculcate
            critical thinking and cater to the curiosity in the field of
            animatronics, artificial intelligence, fifth generation robotics,
            and agglomeration of various other domains of engineering.
            Aficionados, who have in them the talent and knack to put up
            something extraordinary and amaze the world, Srishti aims to provide
            them the resources and the platform to polish and exhibit their
            talent while serving as a single platform to witness and appreciate
            the diverse work of fellow students and get inspired by the amount
            of outcome of the efforts, so that no pragmatic idea goes untapped.
          </div>

          <div className="HistoryDetailsImage">
            <img src={img} alt="History" />
          </div>
        </div>
      </div>
    );
  }
}
