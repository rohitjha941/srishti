import React, { Component } from "react";
import "./group.scss";
import { backend_url } from "../../const";
import axios from "axios";
import {NavLink} from "react-router-dom"
export default class Groups extends Component {
  state = {
    groups: [],
  };
  componentDidMount() {
    axios.get(backend_url + "/backend/group/").then(res => {
      this.setState({ groups: res.data });

      console.log(res.data);
    });
  }
  render() {
    return (
      <div className="groups">
        {this.state.groups.map(update => {
          return (
            <div key = {update.id} className="groups-unit">
              <NavLink to={{ pathname: '/groups/details', state: { groups : update} }}>
                <p className="group-name">{update.name}</p>
                <img src={update.image} alt={update.name} />
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  }
}
