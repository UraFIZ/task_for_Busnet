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


class card extends Component {

  render() {
    const { originName, travelTime, destinationName, driver } = this.props.data;
    return (
      <Grid container>
        <Grid item sm={6}>
          <Paper style={display}>
            <p style={divStyle}>{originName}</p>
            <p style={divStyle}>{travelTime}</p>
            <p style={divStyle}>{destinationName}</p>
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper style={display}>
            <p style={divStyle}>{originName}</p>
            <p style={divStyle}>{travelTime}</p>
            <p style={divStyle}>{destinationName}</p>
            <p style={divStyle}>{driver}</p>
          </Paper>

        </Grid>

      </Grid>
    )
  }
}
export default card