import React, { PropTypes } from 'react'

const TagList = props => {
    var items = props.tags.map(({ color, name }) => {
        let style = { color };
        return <li key={name}>
            <a className="nav-link" style={style}>{name}</a>
        </li>
    })

    return (
        <ul className={props.className}>
            {items}
        </ul>
    )
}

export default TagList