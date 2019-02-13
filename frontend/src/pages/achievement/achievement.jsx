import React, { Component } from "react";
import ComingSoon from "../../static/undercons.svg"

export default class Achievement extends Component {

render(){
    return(
        <div>

        <center><img style ={{"width" : "30vw" , "paddingTop" : "20vh"}} src = {ComingSoon} alt ="" />
            <p style = {{"marginTop" : "2vw" , "fontWeight": "Bold" , "fontSize" : "2rem"}}>Comming Soon</p>
        </center>
        


        </div>
    );
}




}
