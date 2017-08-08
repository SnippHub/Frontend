import React, { Component } from 'react'
import {
    Link,
    NavLink,
    withRouter,
} from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import TagList from 'components/Sidebar/TagList';

@inject("tagStore") @observer
class SidebarContainer extends Component {
    componentWillMount() {
        this.props.tagStore.loadTags();
    }

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
                        <label>Global Tags</label>
                        <TagList className="nav-list" tags={this.props.tagStore.globalTags}></TagList>
                    </section>
                </section>

            </nav>
        )
    }
}

export default SidebarContainer