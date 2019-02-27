import React, { Component } from "react";
import "./groups_details.scss";
import Line from "../../static/home/Line.png";
import phone from "../../static/phone.png";
import email from "../../static/email.png";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

export default class GoupDetails extends Component {
  render() {
    let data = this.props.location.state.groups;

    console.log(data);
    return (
      <div className="group-details">
        <div className="group-details-image">
          <img src={data.image} alt={data.name} />

          <div className="group-details-logo">
            <img src={data.logo} alt={data.name + "logo"} />
          </div>
        </div>

        <div className="group-details-inner">
          <div className="title2">{data.name}</div>{" "}
          <span className="group-details-website">
            {" "}
            <a target="_blank" rel="noopener noreferrer" href={data.web_url}>
              {" "}
              Visit Website <img src={Line} alt="" />{" "}
            </a>
          </span>
          <div className="group-details-description">{data.description}</div>
          {data.header.map(e => {
            return (
              <div className="group-header">
                <div className="group-header-title">{e.title}</div>

                <div className="title-description">
                  {ReactHtmlParser(e.description)}
                </div>
              </div>
            );
          })}
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
          {data.members.length === 0 ? null : (
            <div className="group-details-events">
              <div className="title2">Contact Us</div>

              {data.members.map(e => {
                console.log(e);
                return (
                  <div key={e.id} className="group-details-events-unit">
                    <div className="group-details-events-image">
                      <img src={e.photo} alt={e.student_name} />
                    </div>

                    <div className="group-details-events-details">
                      <div className="group-details-events-name">
                        {e.student_name}
                      </div>

                      <div className="group-details-contact-designation">
                        {e.student_designation}
                      </div>

                      <div className="group-details-contact-designation">
                        <img src={phone} alt="" /> {e.phone}
                      </div>

                      <div className="group-details-contact-designation">
                        <img src={email} alt="" /> {e.email}
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
