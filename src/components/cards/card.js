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


class Card extends Component {

  state = {
    showInfo: false
  };

  operation = e => {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }
  render() {
    const { originName, travelTime, destinationName, driver } = this.props.data;

    return (
      <Grid container>
        <Grid item sm={6}>
          <Paper onClick={this.operation} style={display}>
            <p style={divStyle}>{originName}</p>
            <p style={divStyle}>{travelTime}</p>
            <p style={divStyle}>{destinationName}</p>
          </Paper>
        </Grid>
        <Grid item sm={6}>

          {this.state.showInfo ?
            <Paper style={display}>
              <p style={divStyle}> origin:{originName}</p>
              <p style={divStyle}>travelTime:{travelTime}</p>
              <p style={divStyle}>destination:{destinationName}</p>
              <p style={divStyle}>driver Name: {driver}</p>
            </Paper>
            : null
          }


        </Grid>

      </Grid>
    )
  }
}
export default Card