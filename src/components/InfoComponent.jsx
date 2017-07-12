import React, { Component } from 'react';

class InfoComponent extends Component {
    render() {
        return (
            <h1>I am: {this.props.id}</h1>
        );
    }
}

export default InfoComponent;