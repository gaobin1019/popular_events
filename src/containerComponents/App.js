import React, { Component } from 'react';
import logo from '../asset/images/logo.svg';
import '../css/App.css';
import {Main} from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
