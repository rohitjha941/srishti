import React, { Component } from "react";
import "./history.scss";
import img from "../../../static/1.jpg";
export default class History extends Component {
  render() {
    return (
      <>
        <div className="History">
          <div className="title">VISION</div>

          <div className="HistoryDetails">
            <div className="HistoryDetailsText">
              In the times where our nation is witnessing robust economic
              growth, IIT Roorkee strives to unleash the untapped potential of
              bright young minds. Burgeoning up the path, IIT Roorkee has
              achieved the grandeur of success owing to extravagant events like
              Srishti which create inclusive and creative platforms for the
              manifestation of skills and calibre of its students. At Srishti,
              creativity and technology are contextualized and students learn to
              implement concepts gathered in the classrooms. Srishti, the Annual
              Technical Exhibition of IIT Roorkee, aims to demarcate to society
              a plethora of innovations and cutting edge technology used in a
              premier technological institute of the nation. It also aims to
              inculcate critical thinking and cater to the curiosity of students in the
              field of animatronics, artificial intelligence, fifth generation
              robotics, and agglomeration of various other domains of
              engineering. Aficionados, who have in them the talent and knack to
              put up something extraordinary and amaze the world, Srishti aims
              to provide them the resources and the platform to polish and
              exhibit their talent while serving as a single platform to witness
              and appreciate the diverse work of fellow students and get
              inspired by the amount of outcome of the efforts, so that no
              pragmatic idea goes untapped.
            </div>

            <div className="HistoryDetailsImage">
              <img src={img} alt="History" />
            </div>
          </div>
        </div>

        <div className="History">
          <div className="title">HISTORY</div>

          <div className="HistoryDetails">
            <div className="HistoryDetailsText">
              Srishti initially came under the umbrella of Hobbies Club, IIT
              Roorkee whose foundation was laid in 1957, by former Prime
              Minister Pt. Jawaharlal Nehru. Starting with a grant from U.P
              government for Aero Modelling, followed by a grant from UGC for
              setting up a suitable hobbies workshop, where students could try
              their hands at making models, a barrack consisting of 9 rooms was
              suitably modified, renovated and necessary equipment was installed
              for the same.
              <br /><br />
              By 1960, the Hobbies Club came into existence with a membership of
              about 100 enthusiasts and club gradually extended its scope. It
              remained at the heart of all hobby enthusiasts in the institute, that
              assists to encourage and develop young talents to foster the
              growth of innovation and intellect within the institute with
              Srishti as its annual extravaganza.
              <br /><br />
              Srishti has been an integral part of IIT Roorkee. It is a two day
              event that encompasses a spectrum of innovation under a single
              roof. It is a platform for emerging minds to showcase their talent
              to the world. The only kind of exhibition in all IITs, Srishti
              sees huge participation of students coming forward with their
              innovation and is appreciated by professionals and students each
              year.
            </div>

            <div className="HistoryDetailsImage">
              <img src={img} alt="History" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
