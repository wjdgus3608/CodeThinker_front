import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board/board.js';
import SideNav from './Board/SideNav';
class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav/>
      </div>

    );
  }
}

export default App;
