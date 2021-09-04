import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

export default function Footer({ todos, hoverRemove, hovered }) {
    const activeTodos = todos.filter(todo => todo.defaultBackground === true).length;
    // const all = document.querySelector('.all');
    // const active = document.querySelector('.active');
    // const completed = document.querySelector('.completed');

    return (
        <div className="footer">
            <div className="remaining-items">
                <p>{ activeTodos } items left</p>
            </div>
            <div className="mid">
                <p className={hovered ? 'hovered' : undefined}
                    onMouseEnter={() => hoverRemove()}>
                        All
                </p>
                <p 
                    className="active"
                    onMouseEnter={() => hoverRemove()}>
                        Active
                </p>
                <p 
                    className="completed"
                    onMouseEnter={() => hoverRemove()}>
                        Completed
                </p>

            </div>
            <div>
                <p>Clear Completed</p>
            </div>
        </div>
    )
}

Footer.propTypes = {
    todos: PropTypes.array,
    hoverRemove: PropTypes.func,
    hovered: PropTypes.bool
};
