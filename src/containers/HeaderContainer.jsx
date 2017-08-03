import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import { siteTitle } from '../../config/global.config';

class NavigationContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return (
      <header className="header header-6">
        ...
      </header>
    );
  }
}

export default withRouter(NavigationContainer);