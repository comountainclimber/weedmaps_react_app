import React, { Component } from 'react';
import logo from './images/logo.svg';
import './styles/App.css';

import {fetchRequest} from './services/apiService';

class App extends Component {
  componentWillMount() {
    fetchRequest('https://weedmaps.com/dispensaries/native-roots-apothecary/menu_items.json', 'GET')
      .then((result) => {
        console.log(result)
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
