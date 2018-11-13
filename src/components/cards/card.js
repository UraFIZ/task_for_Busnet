import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core';





class card extends Component {

  render() {
    const { data } = this.props;
    return (
      <Grid container>
        <Grid item sm={6}>
          <Paper>
            <h2>{data.originName}</h2>
          </Paper>

          <Paper>
            <h2>{data.destinationName}</h2>
          </Paper>

          <Paper>
            <h2>{data.travelTime}</h2>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}
export default card