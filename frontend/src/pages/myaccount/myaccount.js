import React, { Component } from 'react';
import "./myaccount.scss";
import { backend_url } from "../../const";
import Line from "../../static/myccount/Line.png"
export default class myaccount extends Component {

    render() {
        let certies
        if (this.props.user !== undefined && this.props.user !== null) {
            certies = this.props.user.certis
            return (
                <div className="myaccount">
                    <div className="myaccount-header">
                        <div className="title2">CERTIFICATE</div>
                    </div>

                    <div className="certi-array">

                        {certies.map((e, i) => {
                            let certiname;
                            if(e.certificate_type ==="Self" || e.certificate_type ==="NonSTC" ||  e.certificate_type ==="STCP" ){
                                certiname = "Certificate of Participation"
                            }
                            else{
                                certiname = "Certificate of Appreciation"   
                            }
                            return (
                                <div className="certi-unit">
                                    <span className="certi_name">
                                        {i + 1}. {certiname}
                                    </span>
                                    <span className="certi_download">
                                        <a target="blank" rel="noopener noreferrer" href={backend_url + e.generated_certi}>Download <img src={Line} alt="" /></a>
                                    </span>
                                </div>
                            )
                        })}




                    </div>
                </div>
            )
        }
        else {
            return <div />
        }


    }
}
