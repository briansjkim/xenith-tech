import React, { Component } from 'react';
import './App.css';
import TodoList from '../TodoList/TodoList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      // toDo will be an empty string first to take in the user input
      toDo: '',
      toDoList: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(e) {
    this.setState({
      toDo: e.target.value
    });
  };

  handleSubmit(e) {
    if (e.key === 'Enter') {
      e.preventDefault();

      let { toDo, toDoList } = this.state;
      toDoList.push(toDo);
      
      this.setState({
        toDoList: toDoList,
        toDo: ''
      });
    };
  };

  render() {
    return (
      <div>
        <div className="App-input">
          <h1>TODO</h1>
          <input
            onChange={this.handleChange}
            onKeyPress={this.handleSubmit}
            value={this.state.toDo}
            placeholder="Create new item..."
          />
        </div>
        <div className="App-todolist">
          <TodoList />
        </div>
      </div>
    );
  };
};

export default App;
