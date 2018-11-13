import React, { Component } from 'react';
import CardRight from './CardRight'
import CardLeft from './CardLeft'
import { Grid } from '@material-ui/core';



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
          {this.state.selectedItem && <CardRight
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