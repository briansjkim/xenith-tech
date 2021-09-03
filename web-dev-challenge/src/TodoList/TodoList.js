import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
import ListItem from '../ListItem/ListItem';
// import Button from '../Button/Button';

// possibly used Context API since TodoList doesn't really need removeTodo?
    // not deeply nested, so maybe not
export default function TodoList({ todos, removeTodo }) {
    const generateKey = (item) => {
        return `${item}_${new Date().getTime() }`;
    };

    return (
        <div className="Todolist">
            <ul className="todos">
                {todos.map( todo =>
                    <ListItem 
                        key={generateKey(todo)} 
                        todo={todo} 
                        removeTodo={removeTodo}
                    />
                )}
            </ul>
            {/* {todos.length !== 0 && <p>{todos.length} items left</p>} */}
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    removeTodo: PropTypes.func
};
