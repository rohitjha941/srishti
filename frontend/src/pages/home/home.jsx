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
import Left from "../../static/arrow2.png";
import Right from "../../static/arrow1.png";

import Slider_img from "../../static/home/kuchbhi.jpg";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default class Home extends Component {
  state = {
    domain: [],
  };
  componentDidMount() {
    axios.get(backend_url + "/backend/domain/").then(res => {
      this.setState({ domain: res.data });
    });
  }
  render() {
    let settings = {
      dots: false,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
    };

    return (
      <div className="home">
        <div className="home-about">
          <div className="home-about-content">
            <p className="title2">
              60<sup>th</sup> Srishti - Diamond Jubilee
            </p>
            <p>
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
                <img
                  src="https://tinkeringlab.iitr.ac.in/media/auto/events/1.JPG"
                  alt="Tinkering Lab "
                />
              </div>
              {/*
              <div className="slidder_temp">
               <img src = {Slider_img} alt = "ASME" />
              </div>

*/}
            </Carousel>
          </div>
        </div>

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

        <div className="home-testimonails">
          <div className="title2">TESTIMONIALS</div>

          <div className="home-testimonails-data" style = {{"marginBottom" : "120px"}}>
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
                IIT Roorkee is vehemently achieving great strides in every facet
                of academic and cultural events. One such gem in ineffable
                jewellery of events is Srishti. <br />
                In a world where technology plays a pivotal role, IIT Roorkee
                had been organizing Srishti, the Annual Technical Exhibition.
                Innate competence of IITians to bring ideas into reality casts
                Srishti into new vibrant forms every year. Since its inception
                in 1958, Srishti has grown into a wonderful tree of creativity
                where our core values stand deeply rooted. Our efforts to make
                IIT Roorkee a prominent institute of higher education on a
                global stage, Srishti is one of those events which promises a
                bright future for the Institute. Groups compete with each other
                in an inexorable competition where robots of ASME or MaRs taste
                the metal of their rival and RC Plane of SAE thunders in the sky
                like a dragon. Srishti is also packed with groups like MDG and
                SDS labs where the brilliance of artificial intelligence and
                data analysis mesmerizes us.
                <br />
                On this note, I heartily congratulate all the participants of
                Srishti for their vigour and stand in full support of efforts
                from all the students and staff to bring this event to life.
                Team Srishti has pumped in their immetrical efforts to give
                Srishti 2019 its wings of fire.
              </p>
            </div>

            <div className="home-testimonails-data-arrow">
              <img src={Testi} alt="" />
            </div>
          </div>

          <div
            className="home-testimonails-data home-testimonails-data2"
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
                It has been in the bones of IIT Roorkee to take the road less
                travelled and emerge victoriously. Our recent achievements in
                Inter IIT Tech Meet 2018 are concrete proof of the fact. For
                more than 50 years IIT Roorkee had been organizing Srishti, to
                showcase the talent and creativity of our fellow students and it
                has been an ever-growing legacy.
                <br />
                Being compatriots of this institution, limited resources are
                never an edict to drop our esoteric ideas and walk on a
                conventional path. In fact, an event like Srishti is an easel on
                which students paint with colours of unbridled ideas. We are
                committed to edifying the young talented minds of this modern
                order. Srishti 2019 adds a bright chapter in a promise to make
                IIT Roorkee a druid among all the institutes of higher
                education. Groups in Srishti have not only participated to win
                but to brush away the fear of being lampooned of the inefficacy.
                Viewer's astonishment was the fact that Knox's automobiles have
                successfully outmanoeuvred all the terrains and Physics and
                Astronomy Club promises that one of the genii in theoretical
                physics can come from IIT Roorkee too.
                <br />I appreciate the ebullience of students and staffs, wish
                them all the luck for future tasks. I acknowledge the hard work
                of Team Srishti 2019 for setting up a new bar for next year but
                I am sure that next Srishti will be as radiant as this one.
              </p>
            </div>

            <div className="home-testimonails-data-arrow">
              <img src={Testi} alt="" />
            </div>
          </div>
        </div>

        <Stat />
{/*}
        <div className="home-sponsors">
          <div className="title">SPONSORS </div>

          <div className="home-sponsors-div">
            <div className="home-sponsors-array">
              <div>
                <img
                  src="https://www.coca-cola.com/content/dam/GO/CokeZone/Common/global/logo/logodesktop/coca-cola-logo-260x260.png"
                  alt="Coke cola"
                />
              </div>
              <div>
                <img
                  src="https://www.hcltech.com/sites/default/files/styles/large/public/images/guideline_based1.png?itok=JdASqCkG"
                  alt="HCL"
                />
              </div>
              <div>
                <img
                  src="https://commons.wikimedia.org/wiki/File:Samsung_Logo.svg"
                  alt="Samsung"
                />
              </div>
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/1/14/Bharti_Airtel_Limited.svg"
                  alt="Airtel"
                />
              </div>
              <div />
            </div>
          </div>
        </div>
              */}
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
                    <a href="mailto:apatidar@me.iitr.ac.in">
                      apatidar@me.iitr.ac.in
                    </a>
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
            <form>
              <p>GET IN TOUCH!</p>
              <input type="text" required placeholder="Name" />
              <input type="email" required placeholder="Email" />
              <input type="tel" required placeholder="Mobile" />
              <input type="text" required placeholder="Message" />
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}