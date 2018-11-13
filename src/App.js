import React, { Component } from 'react';
import Cards from './components/cards/Cards'
import Header from './components/leyout/Header'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Cards />
      </div>
    );
  }
}

export default App;
