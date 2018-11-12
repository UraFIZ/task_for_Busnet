import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import purple from '@material-ui/core/colors/purple';

const accent = purple['A200'];


class header extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            Tasting task for developer
        </Grid>
        </Grid>
      </div>
    )
  }
}
export default header