import React, { Fragment } from 'react';
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
        <Fragment>
            <ul className="todos">
                {todos.map( todo =>
                    <li key={generateKey(todo)}>{todo}</li>    
                )}
            </ul>
            {/* {todos.length !== 0 && <p>{todos.length} items left</p>} */}
        </Fragment>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array
};
