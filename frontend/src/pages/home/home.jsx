import React, { Component } from "react";
import "./home.scss";
import Line from "../../static/home/Line.png";
import { NavLink } from "react-router-dom";
import { Carousel } from "antd";
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-about">
          <div>
            <p>WHAT ARE WE ?</p>
            <p>
              Lorem ipsum dolor sit amet, suscipit sagittis cras accumsan enim
              quam sem, vivamus nulla mattis phasellus
            </p>
            <p>
              <NavLink to="about/">
                About Us <img src={Line} alt="" />
              </NavLink>
            </p>
          </div>

          <div>
            <Carousel autoplay ={true}>
              <div className = "slidder_temp">
                <h3>1</h3>
              </div>

              <div className = "slidder_temp">
                <h3>1</h3>
              </div>

              <div className = "slidder_temp">
                <h3>1</h3>
              </div>

              <div className = "slidder_temp">
                <h3>1</h3>
              </div>
             
            </Carousel>
            
          </div>
        
        
        
        </div>

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

        <div className="home-contact">
          <div className="home-contact-info">
            <div className="title">CONTACT US </div>
          </div>

          <div className="home-contact-form">
            <form>
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
