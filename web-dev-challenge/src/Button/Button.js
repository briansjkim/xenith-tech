import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

// although Button component only returns a button, it requires logic in it
// and App already has its own logic, so wanted to separate Button logic

// maybe use React Hooks later since it only needs one prop in state
class Button extends Component {
    constructor() {
        super();

        this.state = {
            defaultBackground: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => {
          return {
            defaultBackground: !prevState.defaultBackground
          };
        });
    }

    render() {
        return (
            <button 
                className={this.state.defaultBackground ? "todo-ellipse" : "todo-complete"} 
                onClick={this.handleClick}
            ></button>
        )
    }

}

export default Button;

Button.propTypes = {
    defaultBackground: PropTypes.bool,
    handleClick: PropTypes.func
};
