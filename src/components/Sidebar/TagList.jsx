import React, { PropTypes } from 'react'

const TagList = props => {
    return (
        <ul className={props.className}>
            <li><a className="nav-link">Frontend</a></li>
            <li><a className="nav-link">React</a></li>
            <li><a className="nav-link">CSS</a></li>
            <li><a className="nav-link">Common</a></li>
            <li><a className="nav-link">JS Library</a></li>
            <li><a className="nav-link">Custom Theme</a></li>
        </ul>
    )
}

export default TagList