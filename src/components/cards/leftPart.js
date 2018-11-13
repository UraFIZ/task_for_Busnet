import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core';

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
class leftPart extends Component {
  render() {
    const { originName, travelTime, destinationName } = this.props.data;
    return (
      <Grid item sm={6}>
        <Paper style={display}>
          <p style={divStyle}>{originName}</p>
          <p style={divStyle}>{travelTime}</p>
          <p style={divStyle}>{destinationName}</p>
        </Paper>

      </Grid>
    )
  }
}
export default leftPart