import React, { Component } from "react";
import styled from "styled-components";

const Styles = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 1.875rem;
`;
export default class Text extends Component {
  render() {
    return (
      <Styles
        className={
          this.props.white
            ? `textColorWhite ${this.props.className}`
            : `textColorBlack ${this.props.className}`
        }
      >
        {this.props.children}
      </Styles>
    );
  }
}
