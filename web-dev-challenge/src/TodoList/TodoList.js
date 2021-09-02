import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
// import Todo from './Todo';

export default function TodoList({ todos }) {
    const generateKey = (item) => {
        return `${item}_${new Date().getTime() }`;
    };

    return (
        <div className="Todolist">
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
