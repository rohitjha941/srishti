import React, { Component } from "react";
import "./group.scss";
import { backend_url } from "../../const";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Title from "../../components/title/title";
import Text from "../../components/text/text";
export default class Groups extends Component {
  state = {
    groups: []
  };
  componentDidMount() {
    axios.get(backend_url + "/backend/group/").then(res => {
      this.setState({ groups: res.data });
    });
  }
  render() {
    return (
      <div className="groups-wrapper">
        <Title>Our Groups</Title>
        <Text>
          Following are listed the campus groups that are going to takepart in
          Srishti 2020
        </Text>
        <div className="groups">
          {this.state.groups.map(update => {
            return (
              <NavLink
                to={{ pathname: "/groups/details", state: { groups: update } }}
              >
                <div key={update.id} className="groups-unit">
                  <div className="group-image-holder">
                    <img src={update.card_image} alt={update.name} />
                  </div>
                  <div className="groups-data-holder">
                    <div className="groups-header">
                      <p className="groups-name">{update.name}</p>
                      <img src={update.logo} width="4rem" alt={update.name} />
                    </div>
                    <div className="groups-info">{update.description}</div>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }
}
