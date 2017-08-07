import React, { Component } from 'react'
import {
    Link,
    NavLink,
    withRouter,
} from 'react-router-dom';

import TagList from 'components/Sidebar/TagList';

class SidebarContainer extends Component {
    render() {
        return (
            <nav className="sidenav sidebar main-sidebar">
                <section className="sidenav-content">
                    <NavLink className="nav-link" to="/new/">
                        Add new Snippet
                    </NavLink>
                    <NavLink className="nav-link" to="/own/">
                        My Snippets
                    </NavLink>
                    <NavLink className="nav-link" to="/starred/">
                        Starred Snippets
                    </NavLink>

                    <section className="nav-group">
                        <label for="tabexample2">Global Tags</label>
                        <TagList className="nav-list"></TagList>
                    </section>
                </section>

            </nav>
        )
    }
}

export default SidebarContainer