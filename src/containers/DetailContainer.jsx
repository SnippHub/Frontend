import React, { Component } from 'react';
import InfoComponent from 'components/InfoComponent';

class DetailContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="starter-template">
                <InfoComponent id={this.props.match.params.id}></InfoComponent>
            </div>
        );
    }
}

export default DetailContainer;