import React, { Component } from 'react';
import './App.css';
import TodoList from '../TodoList/TodoList.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todo: {
        input: '',
        defaultBackground: true
      },
      todoList: [],
      hovered: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.hoverRemove = this.hoverRemove.bind(this);
  }

  handleChange(e) {
    let newTodo = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase();
    this.setState(prevState => {
      return {
        todo: {
          ...prevState.todo,
          input: newTodo
        }
      };
    });
  }

  handleSubmit(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      
      let { todo } = this.state;
      let todoList = [...this.state.todoList];

      if (todoList.includes(todo.input)) {
        alert('This is already in your list');
        this.setState(prevState => {
          return {
            todo: {
              ...prevState.todo,
              input: ''
            }
          };
        });
        return;
      }

      this.setState( prevState => {
        return {
          todoList: [...prevState.todoList, todo],
          todo: {
            ...prevState.todo,
            input: ''
          }
        };
      });
    }
  }

  completeTodo(todoItem) {
    let todoIdx = this.state.todoList.indexOf(todoItem);
    this.setState(prevState => {
      return {
        todoList: [
          ...prevState.todoList.slice(0, todoIdx),
          {
            ...prevState.todoList[todoIdx],
            defaultBackground: !prevState.todoList[todoIdx].defaultBackground
          },
          ...prevState.todoList.slice(todoIdx + 1)
        ]
      }
    })
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

  hoverRemove() {
    this.setState(prevState => {
        return {
            hovered: !prevState.hovered
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
            value={this.state.todo.input}
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
            completeTodo={this.completeTodo}
            removeTodo={this.removeTodo}
            hoverRemove={this.hoverRemove}
            hovered={this.state.hovered}
          />
        }
        </div>
      </div>
    );
  }
}

export default App;
