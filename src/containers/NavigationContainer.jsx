import React, { Component } from 'react';
import {
    Link,
    withRouter,
} from 'react-router-dom';
import { assign } from 'office-ui-fabric-react/lib/Utilities';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';

import { siteTitle } from '../../config/global.config';

class NavigationContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.items = [
            {
                name: '',
                iconProps: { iconName: 'Sync' },
                key: 'user',
                onClick: () => false
            }
        ];

        this.farItems = [
            {
                name: 'Kruemelkatze',
                iconProps: { iconName: 'Contact' },
                key: 'user',
                onClick: () => this.props.history.push("/")
            }
        ];
    }

    render() {
        return (
            <div id="header">
                <div className="logo">
                    <h2>{siteTitle}</h2>
                </div>
                <CommandBar
                    isSearchBoxVisible='true'
                    searchPlaceholderText='Search...'
                    elipisisAriaLabel='More options'
                    items={this.items}
                    farItems={this.farItems}
                />
            </div>
        );
    }
}

export default withRouter(NavigationContainer);