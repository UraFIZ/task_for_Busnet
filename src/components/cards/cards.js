import React, { Component } from 'react';
import Card from './card'

class cards extends Component {
  constructor() {
    super();

    this.state = {
      data: null
    }
  }

  componentWillMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => this.setState({ data }));

  }


  render() {
    const { data } = this.state;
    const myCard = data && data.rides.lenght > 0 ? data.rides.map(item => (
      <Card
        data={item}
      />

    )
    ) : <div>loading...</div>
    return (
      <div>
        {myCard}
      </div>
    );

  }
}
export default cards