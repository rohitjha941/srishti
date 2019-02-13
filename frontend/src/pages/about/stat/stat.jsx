import React, { Component } from 'react'
import "./stat.scss"
export default class Stat extends Component {
  render() {
    return (
      <div className = "Stat">
        <div className = "Stat-inner">
            <div className = "Stat-unit">
                <p>16000+</p>
                <p>FOOTFALL</p>
            </div>

            <div className = "Stat-unit">
                <p>20+</p>
                <p>TECHGROUPS</p>
            </div>

            <div className = "Stat-unit">
                <p>1000+</p>
                <p>STUDENTS</p>
            </div>

            <div className = "Stat-unit">
                <p>100+</p>
                <p>PROJECTS</p>
            </div>
        </div>
      </div>
    )
  }
}
