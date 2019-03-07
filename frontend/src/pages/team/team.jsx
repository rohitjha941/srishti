import React, { Component } from "react";
import "./team.scss";
import Top from "../../static/achievement/top.png";
import Anant from "../../static/team/anant.1.jpg";
import Atul from "../../static/team/Atul.1.jpg";
import Madhur from "../../static/team/madhur.1.jpg";
import Marcha from "../../static/team/Marcha.jpg";
import Prasanna from "../../static/team/Prasanna.1.jpg";
import Fb from "../../static/team/fb.png";
import Ln from "../../static/team/ln.png";

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
              <p className="des">
                Faculty Advisor - SAE, IITR <br /> MotorSports - IITR <br />{" "}
                Team KNOx
              </p>
            </div>

            <div className="team_unit">
              <div>
                <img
                  src="http://people.iitr.ernet.in/facultyphoto/dvaksfme_E05rIf4.jpg"
                  alt="Prof. Akshay Dvivedi"
                />
              </div>
              <p className="name">Prof. Akshay Dvivedi</p>
              <p className="des">
                Faculty Advisor - SAE, IITR <br /> MotorSports - IITR <br />
                Team KNOx
              </p>
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

          <p className="team_type"> Student Body</p>

          <div className="team_array">
            <div className="team_unit">
              <div>
                <img src={Anant} alt="Anant Vashistha" />
              </div>
              <p className="name">Anant Vashistha</p>
              <p className="des">Overall Coordinator</p>
              <center>
                <a
                  href="https://www.facebook.com/anant.vashistha.1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-facebook"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/anant-vashistha/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </center>
            </div>
            {/*
            <div className="team_unit">
              <div>
                <img
                  src={Anant}
                  alt="Ankit Alok Bagaria"
                />
              </div>
              <p className = "name">Ankit Alok Bagaria</p>
              <p className = "des">Gen. Sec. - Technical Affairs</p>
            </div>


            <div className="team_unit">
              <div>
                <img
                  src={Anant}
                  alt="Harshit Sharma"
                />
              </div>
              <p className = "name">Harshit Sharma</p>
              <p className = "des">Deputy Gen. Sec. - Technical Affairs</p>
            </div>
*/}

            <div className="team_unit">
              <div>
                <img src={Atul} alt="Atul Patidar" />
              </div>
              <p className="name">Atul Patidar</p>
              <p className="des">Head - Events & Promotions</p>
              <center>
                <a
                  href="https://www.facebook.com/atul.patidar.165"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-facebook"></i>
                </a>

                <a
                  href="https://in.linkedin.com/in/atul-patidar-849516104"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </center>
            </div>

            <div className="team_unit">
              <div>
                <img src={Madhur} alt="Madhur Bhutke" />
              </div>
              <p className="name">Madhur Bhutke</p>
              <p className="des">Head - Sponsorship</p>
              <center>
                <a
                  href="https://www.facebook.com/madhurbutke"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-facebook"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/madhur-butke/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </center>
            </div>

            <div className="team_unit">
              <div>
                <img src={Prasanna} alt="Prasannadeep Das" />
              </div>
              <p className="name">Prasannadeep Das</p>
              <p className="des">Head - Design & Web-D</p>
              <center>
                <a
                  href="https://www.facebook.com/prasanna.das.921"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-facebook"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/prasannadeep-das-803057132/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </center>
            </div>

            <div className="team_unit">
              <div>
                <img src={Marcha} alt="Sanjeevani Marcha" />
              </div>
              <p className="name">Sanjeevani Marcha</p>
              <p className="des">Head - Editorial</p>
              <center>
                <a
                  href="https://www.facebook.com/sanjeevani.marcha"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-facebook"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/sanjeevani-marcha-30020b160/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </center>
            </div>
          </div>
        </div>
      </>
    );
  }
}
