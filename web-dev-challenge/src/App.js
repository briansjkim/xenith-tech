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
  };

  render() {
    return (
      <div>
        <h1>Hi There</h1>
      </div>
    );
  };
};

export default App;
