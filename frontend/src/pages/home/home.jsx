import React, { Component } from "react";
import "./home.scss";
import Line from "../../static/home/Line.png";
import { NavLink } from "react-router-dom";
import { Carousel } from "antd";

import axios from "axios";
import { backend_url } from "../../const";
import Testi from "../../static/home/testimonail.png";
import Stat from "../about/stat/stat";
import Phone from "../../static/home/phone.png";
import Mail from "../../static/home/mail.png";
import Address from "../../static/home/address.png";
import ReactHtmlParser from "react-html-parser";
import Drone from "../../static/home/drone.png";

export default class Home extends Component {
  state = {
    domain: [],
    name: null,
    email: null,
    phone: null,
    message: null,
    projects: [],
  };
  componentDidMount() {
    axios.get(backend_url + "/backend/home-projects/").then(res => {
      this.setState({ projects: res.data });
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    let data = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.phone,
      message: this.state.message,
    };

    axios({
      method: "post",
      url: backend_url + "/backend/contact/",
      data: data,
    }).then(res => {
      alert("We will revert back to you shortly");
    });
  };
  render() {
    return (
      <div className="home">
        <div className="home-about">
          <div className="home-about-content">
            <p className="title2">
              60<sup>th</sup> Srishti - Diamond Jubilee
            </p>
            <p>
              <div className="srishti-date"> 09-10 March’19 </div>
              Srishti is the Annual Technical Exhibition of IIT Roorkee that
              aims towards integrating all realms of technical activities
              conducted within the R-land. Since its inception in 1958, Srishti
              has inspired the brilliant minds of our institute to come up with
              creative ideas and practical innovations.
            </p>
            <p>
              <NavLink to="about">
                Learn More <img src={Line} alt="" />
              </NavLink>
            </p>
          </div>

          <div>
            <Carousel autoplay={true}>
              <div className="slidder_temp">
                <img src={Drone} alt="Drone" />
              </div>
              {/*
              <div className="slidder_temp">
               <img src = {Slider_img} alt = "ASME" />
              </div>

*/}
            </Carousel>
          </div>
        </div>
        {/*
        <div className="home-domains">
          <div className="title2">DOMAINS</div>
          <span className="ViewAll">
            <NavLink to="/about/domain">
              View All <img src={Line} alt="" />
            </NavLink>
          </span>
 
          <div className="home-domain-slidder">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={this.state.domain.length}
              visibleSlides={3}
              className="home-domain-slidder-parent"
            >
              <Slider>
                {this.state.domain.map((update, e) => {
                  return (
                    <Slide index={e} key={update.id}>
                      <div className="">
                        <img alt={update.name} src={update.image} />
                      </div>
                    </Slide>
                  );
                })}
              </Slider>

              <ButtonBack>
                <img src={Left} alt="left-arrow" />
              </ButtonBack>
              <ButtonNext>
                <img src={Right} alt="right-arrow" />
              </ButtonNext>
            </CarouselProvider>
          </div>
        </div>
              */}

        {this.state.projects.length === 0 ? null : (
          <div className="home-projects">
            <div className="title2">UPCOMING PROJECTS</div>
            <br />
            <br />
            <br />
            {this.state.projects.map(e => {
              return (
                <div key={e.id} className="home-project-unit">
                  <div className="home-project-image">
                    <img src={e.image} alt={e.name} />
                  </div>

                  <div className="home-project-details">
                    <div className="home-project-title">{e.name}</div>

                    <div className="home-project-description">
                      {ReactHtmlParser(e.desciptiom)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

    
        <div className="home-testimonails">
          <div className="title2">TESTIMONIALS</div>

       {/*   <div
            className="home-testimonails-data"
            style={{ marginBottom: "120px" }}
          >
            <div className="home-testimonails-data-image">
              <img
                src="http://people.iitr.ernet.in/facultyphoto/akc_AXu3ac6.jpg"
                alt="Prof. Ajit Kumar Chaturvedi"
              />
            </div>

            <div className="home-testimonails-data-details">
              <p>Prof. Ajit Kumar Chaturvedi</p>
              <p>Director</p>
              <p>IIT Roorkee </p>

              <p>
                Lorem ipsum dolor sit amet, suscipit sagittis cras accumsan enim
                quam sem, vivamus nulla mattis phasellus et interdum, cursus
                ipsum eum eros integer massa, nam magna lacinia felis. Massa
                nostra nulla imperdiet ipsum. Aliquam maecenas ultricies. Felis
                suspendisse sit ut. Sit a semper egestas, ipsum justo tristique
                amet rutrum donec, suspendisse eros rutrum luctus, risus
                volutpat in. Nunc vitae dui, lacus et lorem id neque laoreet id,
                ut aliquam lectus nullam leo, sit libero amet. Nullam quis
                suspendisse maecenas erat donec,
              </p>
            </div>

            <div className="home-testimonails-data-arrow">
              <img src={Testi} alt="" />
            </div>
          </div>
       */}
          <div
            className="home-testimonails-data"
            id="testi2"
          >
            <div className="home-testimonails-data-image">
              <img
                src="https://tinkeringlab.iitr.ac.in/media/members/management/Prof._Manoranjan_Parida.jpg"
                alt="Prof. Manoranjan Parida"
              />
            </div>

            <div className="home-testimonails-data-details">
              <p>Prof. Manoranjan Parida</p>
              <p>Dean SRIC</p>
              <p>IIT Roorkee </p>
              <p>
                 Being compatriots of this institution, we have always work on our esoteric ideas and walk on a unconventional paths. In fact, an event like Srishti is an easel on which students paint with colours of unbridled ideas. We are committed to edifying the young talented minds of this modern order. Srishti 2019 adds a bright chapter in a promise to make IIT  Roorkee a druid among all the institutes of higher education. Groups in Srishti have not only participated to win but to brush away the fear of being lampooned of the inefficacy. Viewer's astonishment was the fact that Knox's automobiles have successfully outmanoeuvred all the terrains and Physics and Astronomy Club promises that one of the genii in theoretical physics can come from IIT Roorkee too.
I acknowledge the hard work of Team Srishti 2019 for setting up new bar and we are ready for a dynamic event.
              </p>
            </div>

            <div className="home-testimonails-data-arrow">
              <img src={Testi} alt="" />
            </div>
          </div>
        </div>
  
        <Stat />

        <div className="home-sponsors">
          <div className="title">FORMER SPONSORS </div>

          <div className="home-sponsors-div">
            <div className="home-sponsors-array">
              <div>
                <img
                  src={require("../../static/home/sponsors/coke.png")}
                  alt="Coke cola"
                />
              </div>
              <div>
                <img
                  src={require("../../static/home/sponsors/hcl.png")}
                  alt="HCL"
                />
              </div>
              <div>
                <img
                  src={require("../../static/home/sponsors/samsung.png")}
                  alt="Samsung"
                />
              </div>
              <div>
                <img
                  src={require("../../static/home/sponsors/airtel.png")}
                  alt="Airtel"
                />
              </div>

              <div>
                <img
                  src={require("../../static/home/sponsors/AMD.png")}
                  alt="AMD"
                />
              </div>
              <div />
            </div>
          </div>
        </div>

        <br />

        <div className="home-contact">
          <div className="home-contact-info">
            <div className="title">CONTACT US </div>

            <div className="home-contact-array">
              <div className="home-contact-item">
                <div className="item1">
                  <img src={Phone} alt="Phone" />
                </div>

                <div className="item2">
                  <div className="item2-title">Phone</div>
                  <div className="item2-des">+91 - 75000 47750</div>
                </div>
              </div>

              <div className="home-contact-item">
                <div className="item1">
                  <img src={Mail} alt="Email" />
                </div>

                <div className="item2">
                  <div className="item2-title">Email</div>
                  <div className="item2-des">
                    <a href="mailto:srishti@iitr.ac.in">srishti@iitr.ac.in</a>
                  </div>
                </div>
              </div>

              <div className="home-contact-item">
                <div className="item1">
                  <img src={Address} alt="Address" />
                </div>

                <div className="item2">
                  <div className="item2-title">Address</div>
                  <div className="item2-des">
                    New SAC Building,
                    <br />
                    IIT Roorkee, Roorkee.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="home-contact-form">
            <form onSubmit={this.handleSubmit}>
              <p>GET IN TOUCH!</p>
              <input
                type="text"
                onChange={e => {
                  this.setState({ name: e.target.value });
                }}
                required
                placeholder="Name"
              />
              <input
                type="email"
                onChange={e => {
                  this.setState({ email: e.target.value });
                }}
                required
                placeholder="Email"
              />
              <input
                type="tel"
                onChange={e => {
                  this.setState({ phone: e.target.value });
                }}
                required
                placeholder="Mobile"
              />
              <input
                type="text"
                onChange={e => {
                  this.setState({ message: e.target.value });
                }}
                required
                placeholder="Message"
              />
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
