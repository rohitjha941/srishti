import React, { Component } from "react";
import "./groups_details.scss";
import Line from "../../static/home/Line.png";
import phone from "../../static/phone.png";
import email from "../../static/email.png";
import ReactHtmlParser from "react-html-parser";

export default class GoupDetails extends Component {
  render() {
    let data = this.props.location.state.groups;

    console.log(data);
    return (
      <div className="group-details">
        {/* <div className="group-details-image">
          <img src={data.image} alt={data.name} />

          <div className="group-details-logo">
            <img src={data.logo} alt={data.name + "logo"} />
          </div>
        </div> */}

        <div className="groups-unit1">
          {/* <NavLink
                to={{ pathname: "/groups/details", state: { groups: data } }}
              >
                <p className="group-name">{data.name}</p>
                <div className="group-image-holder">
                  <img src={data.card_image} alt={data.name} />
                </div>
              </NavLink> */}


          <div className='groups-data-holder1'>
            <div className='groups-header1'>
              <img src={data.logo} width='4rem' alt={data.name} />
              <p className='groups-name1'>{data.name}</p>
            </div>
            <div className='groups-info1'>
              {data.description}
            </div>
          </div>
          <div className="group-image-holder1">
            <img src={data.card_image} alt={data.name} />
          </div>
        </div>
        <div className="group-details-inner">
          {/* <div className="title2">{data.name}</div>
          <span className="group-details-website">

            <a target="_blank" rel="noopener noreferrer" href={data.web_url}>

              Visit Website <img src={Line} alt="" />
            </a>
          </span>
          <div className="group-details-description">{data.description}</div> */}
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
              <div className="title2">Events that we we’ll organize </div>


              <div>
                <table>
                  <tr>
                    <th>Name of Event</th>
                    <th>Day</th>
                    <th>Venue</th>
                    <th>Timings</th>
                  </tr>
                  {data.events.map(e => {
                    return (
                      <tr>
                        <td>
                          {e.event_name}
                        </td>
                        <td>
                          {e.date}
                        </td>
                        <td>
                          {e.location}
                        </td>
                        <td>
                          {e.time}
                        </td>

                      </tr>

                    )



                  })}
                </table>
              </div>
              {/* // <div key={e.id} className="group-details-events-unit">
                  //   <div className="group-details-events-image">
                  //     <img src={e.event_image} alt={e.event_name} />
                  //   </div>

                  //   <div className="group-details-events-details">
                  //     <div className="group-details-events-name">
                  //       {e.event_name}
                  //     </div>

                  //     <div className="group-details-events-descritpion">
                  //       {e.event_description}
                  //     </div>

                  //     <div className="group-details-events-location">
                  //       {e.date} | {e.time} | {e.location}
                  //     </div>
                  //   </div>
                  // </div> */}

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
              {data.members.map(e => {
                console.log(e);
                return (
                  <div key={e.id} className="group-contact-unit">
                    <div className="group-contact-image">
                      <img src={e.photo} alt={e.student_name} />
                    </div>

                    <div className="group-contact-detail">
                    <div className="group-header-title">Contact Us</div>
                      <div className="group-contact-detail-name">
                        {e.student_name}
                      </div>

                      <div className="group-details-contact-designation">
                        {e.student_designation}
                      </div>
                      <div className="group-details-contact-designation">
                        {e.email}
                      </div>
                      <div className="group-details-contact-designation">
                       {e.phone}
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
