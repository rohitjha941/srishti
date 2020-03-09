import React, { Component } from "react";
import "./srishti.scss";
import Title from "../../../components/title/title";
import Text from "../../../components/text/text";
export default class AboutSrishti extends Component {
  render() {
    return (
      <>
        <div className="AboutSrishti">
          <Title>About Srishti</Title>
          <Text>
            Srishti is the Annual Technical Exhibition of IIT Roorkee that aims
            towards integrating all realms of technical activities conducted
            within the R-land. Since its inception in 1958, Srishti has inspired
            the brilliant minds of our institute to come up with creative ideas
            and practical innovations. It has been the cynosure of our core
            values that are deeply rooted in its foundation. It provides the
            students of IITR with a great platform to showcase their talents and
            prowess in a plethora of avocations such as Modelling & Robotics,
            Stargazing, Motion Gaming, Artificial Intelligence, Quadcopters,
            Software Development, Electronics, Astronomy, 3D Printing, etc.
            Along with this, Srishti incorporates business development and
            social entrepreneurship, thus, fostering multi-dimensional growth
            and all-round development of the students. Over the years, Srishti
            has evolved to become a one-stop event where individual students and
            campus groups come together to explore and work upon their interests
            by applying their knowledge and skills in various competitive events
            and workshops, hence, create a platform for the manifestation of the
            techno calibre of the students. A two-day fest packed with
            competitive events, workshops and project exhibitions, it brings to
            you flavours of these diverse domains on one platter and provides
            the R-Junta with a chance to put their existing skills on a test and
            learn new ones in the process.
          </Text>
        </div>
      </>
    );
  }
}
