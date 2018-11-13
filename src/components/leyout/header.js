import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class header extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" style={{ backgroundColor: "#4caf50", marginBottom: "20px" }} >
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Tasting task for developer
          </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
export default header