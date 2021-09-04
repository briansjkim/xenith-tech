import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

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
