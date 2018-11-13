import React, { Component } from 'react';
import Card from './Card'

class Cards extends Component {
  state = {
    data: null
  }

  componentWillMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }


  render() {
    const { data } = this.state;

    return (
      <div>
        {data ? data.rides.map(item => (
          <Card
            key={item.driver}
            data={item}
          />

        )
        ) : <div>loading...</div>}

      </div>
    );

  }
}
export default Cards