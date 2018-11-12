import React, { Component } from 'react'



class card extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h2>{data.originName}</h2>
        <h2>{data.destinationName}</h2>
        <h2>{data.travelTime}</h2>
      </div>
    )
  }
}
export default card