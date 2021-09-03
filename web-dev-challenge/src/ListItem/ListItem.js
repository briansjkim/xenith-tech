import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

// need to add a remove button too
class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultBackground: true
        };

        this.completeTodo = this.completeTodo.bind(this);
    }

    completeTodo() {
        this.setState(prevState => {
            return {
              defaultBackground: !prevState.defaultBackground
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
                {/* <div className="remove-todo">
                    <button>X</button>
                </div> */}
                <button 
                    className="remove-todo" 
                    onClick={() => this.props.removeTodo(this.props.todo)}>
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