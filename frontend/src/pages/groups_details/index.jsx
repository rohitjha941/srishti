import React, { Component } from "react";
import "./groups_details.scss";

export default class GoupDetails extends Component {
  render() {
    let data = this.props.location.state.groups;
    return (
      <div className="groupDetails">
        <div className="title">{data.name}</div>

        <div className="groupDetails-data">
          <div className="groupDetails-array">
            <div className="groupDetails-details">
              <div className="groupDetails-details-text">
                {data.description}
              </div>

              <div className="groupDetails-details-events">
                <p className="groupDetails-title">EVENTS</p>

                {data.events.map((data, e) => {
                  return (
                    <div key={data.id}>
                      <p className="groupDetails-details-events-name">
                        {e + 1}. {data.event_name}
                      </p>

                      <p className="groupDetails-details-events-des">
                        {data.event_description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="groupDetails-image">
              <img src={data.image} alt={data.name} />
            </div>
          </div>

          <div className="groupDetails-members">
            <p className="groupDetails-title">Members</p>

            <div className = "groupDetails-members-array">
            {data.members.map(e=>{
                return(
                    <div key = {e.id} >
                        <img src= {e.photo} alt ={e.student_name}  />
                        <p className = "student-name">{e.student_name}</p>
                        <p className ="student-desc">{e.student_designation}</p>
                        
                    </div>
                )
            })}
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}
