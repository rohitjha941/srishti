import React, { Component } from 'react';
import styled from 'styled-components'


const Heading = styled.div`
    font-weight: 900;
    font-size: 64px;
    line-height: 80px;
    color: #000000;
`

export default class Title extends Component {
    render() {
        return (
            <Heading>
                {this.props.children}
            </Heading>
        )
    }
}
