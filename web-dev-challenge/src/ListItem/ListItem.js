import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

export default function ListItem({todo, completeTodo, removeTodo, hoverRemove, hovered }) {
    return (
        <div className='List-item'>
            <button
                className={todo.defaultBackground ? undefined : 'button-check'}
                onClick={() => completeTodo(todo)}
            ></button>
            <li className={todo.defaultBackground ? undefined : 'todo-complete'}>
                {todo.input}
            </li>
            <button 
                className={hovered ? 'hover-remove' : 'remove-todo' }
                onMouseEnter={() => hoverRemove()} 
                onMouseLeave={() => hoverRemove()}
                onClick={() => removeTodo(todo)}
            >X
            </button>
        </div>
    );
}

ListItem.propTypes = {
    todo: PropTypes.object,
    completeTodo: PropTypes.func,
    removeTodo: PropTypes.func,
    hoverRemove: PropTypes.func,
    hovered: PropTypes.bool
};
