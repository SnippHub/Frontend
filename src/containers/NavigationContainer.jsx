import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

import { siteTitle } from '../../config/global.config';

class NavigationContainer extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand">
                            {siteTitle}
                        </Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Overview</Link></li>
                            <li><Link to="/1">Details to 1</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationContainer;