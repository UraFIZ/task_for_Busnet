import React, { Component } from 'react'
import { Paper } from '@material-ui/core';

let divStyle = {
  padding: "10px",
  marginBottom: "20px"
};

let display = {
  display: "flex",
  justifyContent: "space-around",
  marginBottom: "20px",
  marginLeft: "30px",
  marginRight: "30px"
}


class CardLeft extends Component {
  render() {
    const { originName, travelTime, destinationName } = this.props.data;

    return (
      <Paper onClick={this.props.onItemClick} style={display}>
        <p style={divStyle}>{originName}</p>
        <p style={divStyle}>{travelTime}</p>
        <p style={divStyle}>{destinationName}</p>
      </Paper>
    )
  }
}
export default CardLeft