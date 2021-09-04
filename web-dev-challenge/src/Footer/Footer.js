import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

export default function Footer({ todos, hoverRemove, hovered }) {
    const activeTodos = todos.filter(todo => todo.defaultBackground === true).length;
    // const all = document.querySelector('.all');
    // const active = document.querySelector('.active');
    // const completed = document.querySelector('.completed');

    // if (all && active && completed) {
    //     [all, active, completed].forEach(item => {
    //         item.addEventListener('mouseenter', () => {
    //             console.log('got it')
    //         })
    //     })
    // }

    return (
        <div className="footer">
            <div className="remaining-items">
                <p>{ activeTodos } items left</p>
            </div>
            <div className="mid">
                <p 
                    className={hovered ? 'hovered' : undefined}
                    onMouseEnter={() => hoverRemove()}
                    onMouseLeave={() => hoverRemove()}
                >
                        All
                </p>
                <p 
                    className={hovered ? 'hovered' : undefined}
                    onMouseEnter={() => hoverRemove()}
                    onMouseLeave={() => hoverRemove()}
                >
                        Active
                </p>
                <p 
                    className={hovered ? 'hovered' : undefined}
                    onMouseEnter={() => hoverRemove()}
                    onMouseLeave={() => hoverRemove()}
                >
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
