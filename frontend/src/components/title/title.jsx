import React, { Component } from "react";
import styled from "styled-components";

const Heading = styled.div`
  font-weight: 900;
  font-size: 4rem;
  line-height: 5rem;
  margin-bottom: 3.75rem;
`;

export default class Title extends Component {
  render() {
    return (
      <Heading
        className={
          this.props.white
            ? `textColorWhite ${this.props.className}`
            : `${this.props.className}`
        }
      >
        {this.props.children}
      </Heading>
    );
  }
}
