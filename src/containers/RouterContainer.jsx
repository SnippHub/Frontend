import React, { Component } from 'react';
import {
    Route,
} from 'react-router-dom';

import { getBaseHref } from '../../config/global.config';

import OverviewContainer from 'containers/OverviewContainer';
import DetailContainer from 'containers/DetailContainer';

class RouterContainer extends Component {
    constructor(props) {
        super(props);
        this.baseName = getBaseHref();
    }

    render() {
        return (
            <div className="container">
                <Route exact path={"/"} component={OverviewContainer} />
                <Route exact path={"/:id"} component={DetailContainer} />
            </div>
        );
    }
}

export default RouterContainer;