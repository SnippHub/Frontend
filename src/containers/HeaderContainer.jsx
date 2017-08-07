import React, { Component } from 'react';
import {
  Link,
  NavLink,
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
      <header className="header">
        <div className="branding">
          <Link className="nav-link" to="/">
            <clr-icon shape="vm-bug"></clr-icon>
            <span className="title">SnippHub</span>
          </Link>
        </div>

        <div className="search">
          <label htmlFor="search_input">
            <input id="search_input" type="text" placeholder="Search by keyword, label or user..." />
          </label>
        </div>

        <div className="header-actions">
          <NavLink to="/profile" className="nav-link nav-icon">
            <clr-icon shape="avatar"></clr-icon>
          </NavLink>
          <NavLink to="/settings" className="nav-link nav-icon">
            <clr-icon shape="cog"></clr-icon>
          </NavLink>
          <NavLink to="/logout" className="nav-link nav-icon">
            <clr-icon shape="logout"></clr-icon>
          </NavLink>
        </div>
      </header>

    );
  }
}

export default withRouter(NavigationContainer);