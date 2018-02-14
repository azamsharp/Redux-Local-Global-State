import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import FeaturedMovie from './components/FeaturedMovie'
import FlowerList from './components/FlowerList'

class App extends Component {
  render() {
    return (
      <div>
      <FlowerList />
      </div>
    );
  }
}

export default App;
