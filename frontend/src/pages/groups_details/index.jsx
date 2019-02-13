import React, { Component } from "react";
import "./groups_details.scss";
import Line from "../../static/home/Line.png";
import { updateLocale } from "moment";
export default class GoupDetails extends Component {
  render() {
    let data = this.props.location.state.groups;
    return (
      <div className="group-details">
        <center>
          {" "}
          <img class="group-details-image" src={data.image} alt={data.name} />
        </center>

        <div className="group-details-inner">
          <div className="title2">{data.name}</div>{" "}
          <span className="group-details-website">
            {" "}
            <a target="_blank" href={data.web_url}>
              {" "}
              Visit Website <img src={Line} alt="" />{" "}
            </a>
          </span>
          <div className="group-details-description">{data.description}</div>
          {data.events.length === 0 ? null : (
            <div className="group-details-events">
              <div className="title2">Events</div>

              {data.events.map(e => {
                return (
                  <div key={e.id} className="group-details-events-unit">
                    <div className="group-details-events-image">
                      <img src={e.event_image} alt={e.event_name} />
                    </div>

                    <div className="group-details-events-details">
                      <div className="group-details-events-name">
                        {e.event_name}
                      </div>

                      <div className="group-details-events-descritpion">
                        {e.event_description}
                      </div>

                      <div className="group-details-events-location">
                        {e.date} | {e.time} | {e.location}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}


{data.projects.length === 0 ? null : (
            <div className="group-details-events">
              <div className="title2">Projects</div>

              {data.projects.map(e => {
                return (
                  <div key={e.id} className="group-details-events-unit">
                    <div className="group-details-events-image">
                      <img src={e.project_image} alt={e.project_name} />
                    </div>

                    <div className="group-details-events-details">
                      <div className="group-details-events-name">
                        {e.project_name}
                      </div>

                      <div className="group-details-events-descritpion">
                        {e.project_description}
                      </div>

                     
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}
