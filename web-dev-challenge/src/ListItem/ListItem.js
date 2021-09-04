import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultBackground: true,
            hovered: false
        };

        this.completeTodo = this.completeTodo.bind(this);
        this.hoverRemove = this.hoverRemove.bind(this);
    }

    completeTodo() {
        this.setState(prevState => {
            return {
              defaultBackground: !prevState.defaultBackground
            };
        });
    }
    
    hoverRemove() {
        this.setState(prevState => {
            return {
                hovered: !prevState.hovered
            };
        });
    }

    render() {
        return (
            <div className='List-item'>
                <button
                    className={this.state.defaultBackground ? undefined : 'button-check'} 
                    onClick={this.completeTodo}
                ></button>
                <li className={this.state.defaultBackground ? undefined : 'todo-complete'}>
                    {this.props.todo}
                </li>
                <button 
                    className={this.state.hovered ? 'hover-remove' : 'remove-todo' }
                    onMouseEnter={() => this.hoverRemove()} 
                    onMouseLeave={() => this.hoverRemove()}
                    onClick={() => this.props.removeTodo(this.props.todo)}
                >X
                </button>
            </div>
        );
    }
}

ListItem.propTypes = {
    todo: PropTypes.string,
    removeTodo: PropTypes.func
};

export default ListItem;