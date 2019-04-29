import React, { Component } from 'react';
import {token , backend_url} from "../../const";
 
import axios from "axios"

export default class Logout extends Component {
  componentDidMount(){
    localStorage.removeItem("bgcolor");
    axios
    .get(backend_url + "/certi/logout/", {
      headers: {
        Authorization: `Token  ${token} `
      }
    })
    .then(res => {
      window.location.href = "/";
    })
    .catch(response => {
      window.location.href = "/";
    });

  }
  render() {
    return (
        <div/>
    )
  }
}
