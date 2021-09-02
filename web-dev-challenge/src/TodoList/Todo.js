import React from 'react';
import PropTypes from 'prop-types';

export default function Todo({ todo }) {
    return (
        <li>{todo}</li>
    )
}

Todo.propTypes = {
    todo: PropTypes.string
};
