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
   
          <p className="title2">DOMAIN COVERED</p>
     

        <div className="DomainArray">
          {this.state.domain.map(e => {
            return (
              <div key={e.id}>
                <img src={e.image} alt={e.name} />
                <span>{e.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
