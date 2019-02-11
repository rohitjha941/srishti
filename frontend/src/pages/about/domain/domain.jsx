import React, { Component } from "react";
import "./domain.scss";
import { backend_url } from "../../../const";
import axios from "axios";
export default class Domain extends Component {
  state = {
    domain: [],
  };
  componentDidMount() {
    axios.get(backend_url + "/backend/domain/").then(res => {
      this.setState({ domain: res.data });
    });
  }
  render() {
    return (
      <div className="Domain">
        <center>
          <p className="AboutHeader">DOMAIN COVERED</p>
        </center>

        <div className="DomainArray">
          {this.state.domain.map(e => {
            return (
              <div key={e.id}>
                <img src={e.image} alt={e.name} />
                <p>{e.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
