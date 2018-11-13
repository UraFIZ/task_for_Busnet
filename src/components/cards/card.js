import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core';
import RightPart from './rightPart';
import LeftPart from './leftPart'





class card extends Component {

  render() {

    return (
      <Grid container>
        <LeftPart />
        <RightPart />

      </Grid>
    )
  }
}
export default card