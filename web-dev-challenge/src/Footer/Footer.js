import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

// have to access todoList and see how many todoss' defaultBackground's are true
export default function Footer({ todos }) {
    return (
        <div className="footer">
            <div className="remaining-items">
                <p>{ todos.length } items left</p>
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
    todos: PropTypes.object
};
