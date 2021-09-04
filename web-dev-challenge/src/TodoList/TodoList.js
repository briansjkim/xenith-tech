import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
import ListItem from '../ListItem/ListItem';
import Footer from '../Footer/Footer';
// import Button from '../Button/Button';

// possibly used Context API since TodoList doesn't really need removeTodo?
    // not deeply nested, so maybe not
export default function TodoList({ todos, completeTodo, removeTodo, hoverRemove, hovered }) {
    const generateKey = (item) => {
        return `${item}_${new Date().getTime() }`;
    };

    // const activeTodos = todos.filter(todo => todo.defaultBackground === true).length;


    return (
        <div className="Todolist">
            <ul className="todos">
                {todos.map( todo =>
                    <ListItem 
                        key={generateKey(todo.input)} 
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                        hoverRemove={hoverRemove}
                        hovered={hovered}
                    />
                )}
            </ul>
            { todos.length !== 0 && <Footer todos={todos} hoverRemove={hoverRemove} hovered={hovered} />}
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    completeTodo: PropTypes.func,
    removeTodo: PropTypes.func,
    hoverRemove: PropTypes.func,
    hovered: PropTypes.bool
};
