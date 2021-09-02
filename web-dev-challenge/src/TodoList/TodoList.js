import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';

export default function TodoList({ todos, handleClick, defaultBackground }) {
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
                        {/* onHover => check mark, onClick => colored check icon and todo item crossed out */}
                        {/* onClick is being applied on all the elements instead of individually */}
                        <button className={defaultBackground ? "todo-ellipse" : "todo-complete"} onClick={handleClick}></button>
                        {todo}
                    </li>    
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
