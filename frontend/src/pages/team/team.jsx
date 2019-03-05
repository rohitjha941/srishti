import React, { Component } from "react";
import "./team.scss";
import Top from "../../static/achievement/top.png";

export default class Team extends Component {
  render() {
    return (
      <>
        <img style={{ width: "100%" }} src={Top} alt="" />
        <div className="team">
          <div className="title2">Team - Srishti’19 </div>

          <p className="team_type"> Management Body</p>

          <div className="team_array">
            <div className="team_unit">
              <div>
                <img
                  src="http://people.iitr.ernet.in/facultyphoto/akc_AXu3ac6.jpg"
                  alt="Prof. Ajit K. Chaturvedi"
                />
              </div>

              <p className="name">Prof. Ajit K. Chaturvedi</p>
              <p className="des">Director - IIT Roorkee</p>
            </div>

            <div className="team_unit">
              <div>
                <img
                  src="https://tinkeringlab.iitr.ac.in/media/members/management/Prof._Manoranjan_Parida.jpg"
                  alt="Prof. Manoranjan Parida  "
                />
              </div>
              <p className="name">Prof. Manoranjan Parida</p>
              <p className="des">Dean SRIC - IIT Roorkee</p>
            </div>

            <div className="team_unit">
              <div>
                <img
                  src="http://people.iitr.ernet.in/facultyphoto/avliafap_r61PONH.jpg"
                  alt="Avlokita Agrawal"
                />
              </div>
              <p className="name">Prof. Avlokita Agrawal</p>
              <p className="des">Faculty Coordinator - Srishti’19</p>
            </div>

            <div className="team_unit">
              <div>
                <img
                  src="http://people.iitr.ernet.in/facultyphoto/akshafme_Dk2qDMR.jpg"
                  alt="Prof. Apurbba K. Sharma "
                />
              </div>
              <p className="name">Prof. Apurbba K. Sharma</p>
              <p className="des">Coordinator - DIC, IIT Roorkee</p>
            </div>

            <div className="team_unit">
              <div>
                <img
                  src="https://tinkeringlab.iitr.ac.in/media/members/management/Prof._Inderdeep_singh.jpg"
                  alt="Prof. Inderdeep Singh  "
                />
              </div>
              <p className="name">Prof. Inderdeep Singh</p>
              <p className="des">Coordinator - Tinkering Lab</p>
            </div>
         
         
            <div className="team_unit">
              <div>
                <img
                  src="http://people.iitr.ernet.in/facultyphoto/akdasfme_nsIi6fk.jpg"
                  alt="Prof. Arup Kumar Das"
                />
              </div>
              <p className="name">Prof. Arup Kumar Das</p>
              <p className="des">Faculty Advisor - SAE, IITR <br /> MotorSports - IITR <br /> Team KNOx</p>
            </div>
         
         

            <div className="team_unit">
              <div>
                <img
                  src="http://people.iitr.ernet.in/facultyphoto/dvaksfme_E05rIf4.jpg"
                  alt="Prof. Akshay Dvivedi"
                />
              </div>
              <p className="name">Prof. Akshay Dvivedi</p>
              <p className="des">Faculty Advisor - SAE, IITR <br /> MotorSports - IITR <br /> Team KNOx</p>
            </div>

            <div className="team_unit">
              <div>
                <img
                  src="http://people.iitr.ernet.in/facultyphoto/gdranfce_mK0r8Hu.jpg"
                  alt="Prof. G.D. Ransinchung R.N."
                />
              </div>
              <p className="name">Prof. G.D. Ransinchung R.N.</p>
              <p className="des">CED - CEC, IITR</p> 
            </div>
         

            <div className="team_unit">
              <div>
                <img
                  src="http://people.iitr.ernet.in/facultyphoto/saranfme_pv4TmsM.jpg"
                  alt="Prof. V Huzur Saran"
                />
              </div>
              <p className="name">Prof. V Huzur Saran</p>
              <p className="des">Coordinator - ASME</p> 
            </div>
         
            <div className="team_unit">
              <div>
                <img
                  src="http://people.iitr.ernet.in/facultyphoto/drpskfec_3.jpg"
                  alt="Prof. P. Sateesh Kumar"
                />
              </div>
              <p className="name">Prof. P. Sateesh Kumar</p>
              <p className="des">Coordinator - ACM</p> 
            </div>


            <div className="team_unit">
              <div>
                <img
                  src="http://people.iitr.ernet.in/facultyphoto/vivekfmt_vivekfmt.jpg"
                  alt="Prof. P. Sateesh Kumar"
                />
              </div>
              <p className="name">Prof. Vivek Pancholi</p>
              <p className="des">Coordinator - METES</p> 
            </div>
         
         
         
         
         
         
         
         
         
         
          </div>
        
        
        
        {/*}
          <p className="team_type"> Student Body</p>

    */}
        </div>
      </>
    );
  }
}
