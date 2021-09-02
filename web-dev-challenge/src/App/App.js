import React, { Component, Fragment } from 'react';
import './App.css';
import TodoList from '../TodoList/TodoList.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // toDo will be an empty string first to take in the user input
      toDo: '',
      toDoList: [],
      defaultBackground: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      toDo: e.target.value
    });
  }

  handleSubmit(e) {
    if (e.key === 'Enter') {
      e.preventDefault();

      let { toDo, toDoList } = this.state;
      if (toDoList.includes(toDo)) {
        alert('This is already in your list');
        this.setState({
          toDo: ''
        });
        return;
      }

      toDoList.push(toDo);
      
      this.setState({
        toDoList: toDoList,
        toDo: ''
      });
    }
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
      <div className="App">
        <div className="App-input">
          <h1>TODO</h1>
          <input
            onChange={this.handleChange}
            onKeyPress={this.handleSubmit}
            value={this.state.toDo}
            placeholder="Create new item..."
          />
        </div>
        {/* <div className="App-todolist">
          {this.state.toDoList.length === 0 && <p>You have no items in your todo list. Create an item to begin tracking your list.</p>}
          <TodoList todos={this.state.toDoList} />
        </div> */}
        <Fragment>
        {this.state.toDoList.length === 0 ? 
          <div className="empty-list">
            <p>You have no items in your todo list. Create an item to begin tracking your list.</p>
          </div> :
          <TodoList 
            todos={this.state.toDoList} 
            handleClick={this.handleClick}
            defaultBackground={this.state.defaultBackground}
          />
        }
        </Fragment>
      </div>
    );
  }
}

export default App;
