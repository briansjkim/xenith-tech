import React, { Component } from 'react';
import './App.css';
import TodoList from '../TodoList/TodoList.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todo: '',
      todoList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  handleChange(e) {
    this.setState({
      todo: e.target.value
    });
  }

  handleSubmit(e) {
    if (e.key === 'Enter') {
      e.preventDefault();

      let { todo, todoList } = this.state;
      if (todoList.includes(todo)) {
        alert('This is already in your list');
        this.setState({
          todo: ''
        });
        return;
      }

      todoList.push(todo);
      
      this.setState({
        todoList: todoList,
        todo: ''
      });
    }
  }

  removeTodo(todoItem) {
    this.setState( prevState => {
      return {
        todoList: prevState.todoList.filter( (todo) => {
          return todo !== todoItem
        })
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
            value={this.state.todo}
            placeholder="Create new item..."
          />
        </div>
        <div>
        {this.state.todoList.length === 0 ? 
          <div className="empty-list">
            <p>You have no items in your todo list. Create an item to begin tracking your list.</p>
          </div> :
          <TodoList 
            todos={this.state.todoList} 
            removeTodo={this.removeTodo}
          />
        }
        </div>
      </div>
    );
  }
}

export default App;
