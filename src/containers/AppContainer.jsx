import React, { Component } from 'react';
import {
  BrowserRouter,
} from 'react-router-dom'

import NavigationContainer from "containers/NavigationContainer";
import RouterContainer from "containers/RouterContainer";

import racoonImg from 'images/racoon.jpg';
import racoon2Img from 'images/racoon2.jpg';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <NavigationContainer></NavigationContainer>
          <RouterContainer></RouterContainer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;