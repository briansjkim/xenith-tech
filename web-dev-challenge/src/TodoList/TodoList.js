import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';

export default function TodoList({ todos }) {
    const generateKey = (item) => {
        return `${item}_${new Date().getTime() }`;
    };

    return (
        <div className="Todolist">
            {todos.length === 0 && <p>You have no items in your todo list. Create an item to begin tracking your list.</p>}
            <ul className="todos">
                {todos.map( todo =>
                    <li key={generateKey(todo)}>{todo}</li>
                )}
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array
};
