// import './App.css';
import React, { Component } from 'react';

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
    this.setState( prevState => {
      return {
        toDo: e.target.value
      };
    });
  };

  handleSubmit(e) {
    
  };

  render() {
    return (
      <div>
        <textarea 
          onChange={this.handleChange}
          value={this.state.toDo}
          placeholder="Create new item..."
        />
      </div>
    );
  };
};

export default App;
