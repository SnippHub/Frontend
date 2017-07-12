import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class OverviewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { text: "Overview" };
    }

    render() {
        const list = [1, 2, 3, 4, 5].map((i) => (
            <Link to={"/" + i} key={i} className="list-group-item">{i}</Link>
        ));

        return (
            <div className="starter-template">
                <h1>{this.state.text}</h1>
                <div className="list-group">{list}</div>
            </div>
        );
    }
}

export default OverviewContainer;