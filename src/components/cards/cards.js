import React, { Component } from 'react';
import CardRight from './CardRight'
import CardLeft from './CardLeft'
import { Grid } from '@material-ui/core';
import { oneOf } from 'prop-types';

let display = {

  display: "flex",
  justifyContent: "space-around",
  marginBottom: "20px",
  marginLeft: "30px",
  marginRight: "30px"
}
class Cards extends Component {
  state = {
    data: null,
    activeId: null,
    selectedItem: null
  }

  componentWillMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }



  onItemClick = (item) => {
    console.log(item)
    console.log(item.vehicleTypeId);
    this.setState({
      activeId: item.vehicleTypeId,
      selectedItem: item
    });
  }
  render() {
    const { data } = this.state;
    const myResponse = data ? data : [];

    return (
      <Grid container>
        <Grid item sm={6}>
          {data ? data.rides.map(one => (
            <CardLeft
              key={one.driver}
              data={one}
              onItemClick={() => this.onItemClick(one)}
            />

          )
          ) : <div>loading...</div>}
        </Grid>
        <Grid item sm={6}>
          {this.state.selectedItem && <CardRight style={display}
            activeId={this.state.activeId}
            vehicleTypes={myResponse.vehicleTypes}
            selectedItem={this.state.selectedItem}
          />}
        </Grid>


      </Grid>
    );

  }
}
export default Cards