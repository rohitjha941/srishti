import React, { Component } from "react";
import "./home.scss";
import Line from "../../static/home/Line.png";
import { NavLink } from "react-router-dom";
import { Carousel } from "antd";
import Slider from "react-slick";
import axios from "axios";
import { backend_url } from "../../const";
import Testi from "../../static/home/testimonail.png";
import Stat from "../about/stat/stat";
import Phone from "../../static/home/phone.png";
import Mail from "../../static/home/mail.png";
import Address from "../../static/home/address.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", color: "black" }}
      onClick={onClick}
    >
      vrberbeaebfwdbwbkj
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

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
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <div className="home">
        <div className="home-about">
          <div className = "home-about-content">
            <p className="title2">WHAT ARE WE ?</p>
            <p>
              Lorem ipsum dolor sit amet, suscipit sagittis cras accumsan enim
              quam sem, vivamus nulla mattis phasellus
            </p>
            <p>
              <NavLink to="about/">
                Learn More <img src={Line} alt="" />
              </NavLink>
            </p>
          </div>

          <div>
            <Carousel autoplay={true}>
              <div className="slidder_temp">
                <h3>1</h3>
              </div>

              <div className="slidder_temp">
                <h3>1</h3>
              </div>

              <div className="slidder_temp">
                <h3>1</h3>
              </div>

              <div className="slidder_temp">
                <h3>1</h3>
              </div>
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
            <Slider {...settings}>
              {this.state.domain.map(update => {
                console.log(update);
                return (
                  <div key={update.id}>
                    <div className="">
                      <img alt={update.name} src={update.image} />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        <div className="home-testimonails">
          <div className="title2">TESTIMONIALS</div>

          <div className="home-testimonails-data">
            <div className="home-testimonails-data-image">
              <img
                src="http://people.iitr.ernet.in/facultyphoto/akc_AXu3ac6.jpg"
                alt="Prof. Ajit Kumar Chaturvedi"
              />
            </div>

            <div className="home-testimonails-data-details">
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

              <p>Prof. Ajit Kumar Chaturvedi</p>
              <p>Director</p>
              <p>IIT Roorkee, Roorkee, Uttarakhand</p>
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

              <p>Prof. Manoranjan Parida</p>
              <p>Dean SRIC</p>
              <p>IIT Roorkee, Roorkee, Uttarakhand</p>
            </div>

            <div className="home-testimonails-data-arrow">
              <img src={Testi} alt="" />
            </div>
          </div>
        </div>

        <Stat />

        {/*
        <div className="home-sponsors">
          <div className="title">SPONSORS </div>

          <div className="home-sponsors-div">
            <div className="home-sponsors-description">
              Lorem ipsum dolor sit amet, suscipit sagittis cras accumsan enim
              quam sem, vivamus nulla mattis phasellus et interdum,
            </div>

            <div className="home-sponsors-array">
              <div /> <div /> <div /> <div /> <div />
            </div>
          </div>
        </div>

        <br />
        */}
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
                  <div className="item2-des">+91 - 80064 64672</div>
                </div>
              </div>


              <div className="home-contact-item">
                <div className="item1">
                  <img src={Mail} alt="Email" />
                </div>

                <div className="item2">
                  <div className="item2-title">Email</div>
                  <div className="item2-des"><a href = "mailto:srishti@iitr.ac.in" >srishti@iitr.ac.in</a></div>
                </div>
              </div>



              <div className="home-contact-item">
                <div className="item1">
                  <img src={Address} alt="Address" />
                </div>

                <div className="item2">
                  <div className="item2-title">Address</div>
                  <div className="item2-des">New SAC Building,<br />
IIT Roorkee, Roorkee.</div>
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
