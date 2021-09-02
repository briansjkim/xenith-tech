import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';

export default function TodoList({ todos }) {
    return (
        <div className="Todolist">
            {todos.length === 0 && <p>You have no items in your todo list. Create an item to begin tracking your list.</p>}
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array
};
