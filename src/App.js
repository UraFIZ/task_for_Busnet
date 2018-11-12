import React, { Component } from 'react';
import Cards from './components/cards/cards'
import Header from './components/leyout/header'

import './App.css';

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
