import React, { Component } from 'react';
import {
  BrowserRouter,
} from 'react-router-dom'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'

import NavigationContainer from "containers/NavigationContainer";
import RouterContainer from "containers/RouterContainer";
import SidebarContainer from "containers/SidebarContainer";

import racoonImg from 'images/racoon.jpg';
import racoon2Img from 'images/racoon2.jpg';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fabric id="app">
          <NavigationContainer></NavigationContainer>
          <div id="body">
            <SidebarContainer></SidebarContainer>
            <RouterContainer></RouterContainer>
          </div>
        </Fabric>
      </BrowserRouter>
    );
  }
}

export default App;