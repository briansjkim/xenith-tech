import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

// change to functional component since state isn't needed here anymore
class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hovered: false
        };
        // this.hoverRemove = this.hoverRemove.bind(this);
    }
    
    // hoverRemove() {
    //     this.setState(prevState => {
    //         return {
    //             hovered: !prevState.hovered
    //         };
    //     });
    // }

    render() {
        return (
            <div className='List-item'>
                <button
                    className={this.props.todo.defaultBackground ? undefined : 'button-check'}
                    onClick={() => this.props.completeTodo(this.props.todo)}
                ></button>
                <li className={this.props.todo.defaultBackground ? undefined : 'todo-complete'}>
                    {this.props.todo.input}
                </li>
                <button 
                    className={this.state.hovered ? 'hover-remove' : 'remove-todo' }
                    onMouseEnter={() => this.props.hoverRemove()} 
                    onMouseLeave={() => this.props.hoverRemove()}
                    onClick={() => this.props.removeTodo(this.props.todo)}
                >X
                </button>
            </div>
        );
    }
}

ListItem.propTypes = {
    todo: PropTypes.object,
    completeTodo: PropTypes.func,
    removeTodo: PropTypes.func,
    hoverRemove: PropTypes.func
};

export default ListItem;