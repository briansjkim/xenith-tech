import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

export default function Footer({ todos }) {
    const activeTodos = todos.filter(todo => todo.defaultBackground === true).length;

    return (
        <div className="footer">
            <div className="remaining-items">
                <p>{ activeTodos } items left</p>
            </div>
            <div className="mid">
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
            </div>
            <div>
                <p>Clear Completed</p>
            </div>
        </div>
    )
}

Footer.propTypes = {
    todos: PropTypes.array
};
