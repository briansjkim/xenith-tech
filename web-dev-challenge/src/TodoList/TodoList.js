import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
import ListItem from '../ListItem';
// import Button from '../Button/Button';

export default function TodoList({ todos }) {
    const generateKey = (item) => {
        return `${item}_${new Date().getTime() }`;
    };

    return (
        <div className="Todolist">
            <ul className="todos">
                {todos.map( todo =>
                    <ListItem key={generateKey(todo)} todo={todo} />
                )}
            </ul>
            {/* {todos.length !== 0 && <p>{todos.length} items left</p>} */}
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    handleClick: PropTypes.func,
    defaultBackground: PropTypes.bool
};
