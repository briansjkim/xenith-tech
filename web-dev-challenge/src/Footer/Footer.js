import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

// have to access todoList and see how many todoss' defaultBackground's are true
export default function Footer({ todosLength }) {
    return (
        <div>
            <div className="remaining-items">
                <p>{ todosLength } items left</p>
            </div>
        </div>
    )
}

Footer.propTypes = {
    todosLength: PropTypes.number
};
