import React, { Component } from 'react';
import {
  BrowserRouter,
} from 'react-router-dom'

import HeaderContainer from "containers/HeaderContainer";
import SidebarContainer from "containers/SidebarContainer";
import SnippetListContainer from "containers/SnippetListContainer";
import SnippetContainer from "containers/SnippetContainer";

import racoonImg from 'images/racoon.jpg';
import racoon2Img from 'images/racoon2.jpg';

import { getBaseHref } from '../../config/global.config';

class App extends Component {
  baseHref = getBaseHref()

  render() {
    return (
      <BrowserRouter basename={this.baseHref}>
        <div>
          <div className="main-container">
            <HeaderContainer></HeaderContainer>
            <div className="content-container">
              <SidebarContainer></SidebarContainer>
              <SnippetListContainer></SnippetListContainer>

              <div className="content-area">
                <SnippetContainer></SnippetContainer>
              </div>

            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;