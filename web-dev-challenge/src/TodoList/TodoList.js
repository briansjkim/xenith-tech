import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';

export default function TodoList({ todos }) {
    const generateKey = (item) => {
        return `${item}_${new Date().getTime() }`;
    };

    return (
        // <div className="Todolist">
        //     <ul className="todos">
        //         {todos.map( todo =>
        //             <li key={generateKey(todo)}>{todo}</li>
        //         )}
        //     </ul>
        // </div>
        <div className="Todolist">
            <ul className="todos">
                {todos.map( todo =>
                    <li key={generateKey(todo)}>
                        <span className="todo-circle"></span>
                        {todo}
                    </li>    
                )}
            </ul>
            {/* {todos.length !== 0 && <p>{todos.length} items left</p>} */}
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array
};
