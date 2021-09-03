import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

class ListItem extends Component {
    constructor(props) {
        super(props);

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
            <div className='List-item'>
                <button
                    className={!this.state.defaultBackground && 'button-check'}
                    onClick={this.handleClick}
                ></button>
                <li className={!this.state.defaultBackground && 'todo-complete'}>{this.props.todo}</li>
            </div>
        )
    }
}

ListItem.propTypes = {
    todo: PropTypes.string
};

export default ListItem;