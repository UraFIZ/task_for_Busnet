import React, { Component } from 'react'
import { Paper } from '@material-ui/core';


let divStyle = {
  padding: "10px",
  marginBottom: "20px"
};

let display = {
  position: "sticky",
  top: "-1px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  marginBottom: "20px",
  marginLeft: "30px",
  marginRight: "30px"

}


class CardRight extends Component {
  render() {
    const { selectedItem } = this.props;
    const activeItem = this.props.vehicleTypes
      .filter(item => item.id === this.props.activeId)
      .map(item => (
        <div key={item.id}>{item.name}</div>
      )
      )
    return (

      <Paper style={display} >
        <div style={divStyle} >
          vehicle-type: {activeItem}
        </div>
        <div style={divStyle} >
          origin:{selectedItem.originName}
        </div>
        <div style={divStyle} >
          travelTime:{selectedItem.travelTime}
        </div>
        <div style={divStyle} >
          destination:{selectedItem.destinationName}
        </div>
        <div style={divStyle} >
          driver:{selectedItem.driver}
        </div>

      </Paper>

    )
  }
}
export default CardRight