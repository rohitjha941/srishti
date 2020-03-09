import React, { Component } from 'react';
import styled from 'styled-components'


const Heading = styled.div`
    font-weight: 900;
    font-size: 4rem;
    line-height: 5rem;
    color: #000000;
    margin-bottom: 3.75rem;
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
