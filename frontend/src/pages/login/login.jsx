import React, { Component } from "react";
import { backend_url, OAuthRedirect } from "../../const"; 
 
import axios from "axios";
 export default class Register extends Component {
  componentDidMount() { 
    axios.get( backend_url + "/certi/login/" + this.props.location.search)
    .then(res => {
      localStorage.setItem("bgcolor", res.data.token);
      window.location.href = "/Myaccount";
    })
    .catch(response => {
      alert("Oops there was an error. You will be redirected to channeli again for login after you click ok")
      window.location.href = OAuthRedirect;
    });
    }

   render() {
     return (
       <div>
         Loading
       </div>
     )
   }
 }