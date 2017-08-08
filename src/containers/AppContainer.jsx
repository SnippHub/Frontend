import React, { Component } from 'react';
import {
  BrowserRouter,
} from 'react-router-dom'
import { Provider } from 'mobx-react';

import HeaderContainer from "containers/HeaderContainer";
import SidebarContainer from "containers/SidebarContainer";
import SnippetListContainer from "containers/SnippetListContainer";
import SnippetContainer from "containers/SnippetContainer";

import racoonImg from 'images/racoon.jpg';
import racoon2Img from 'images/racoon2.jpg';

import config from '../../config/global.config';
import TagStore from 'stores/TagStore';
import SnippetStore from 'stores/SnippetStore';

class App extends Component {
  baseHref = config.getBaseHref()

  //GlobalStores
  tagStore = new TagStore();
  snippetStore = new SnippetStore();

  render() {
    return (
      <BrowserRouter basename={this.baseHref}>
        <Provider tagStore={this.tagStore} snippetStore={this.snippetStore}>
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
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;