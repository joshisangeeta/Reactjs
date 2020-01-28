import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App_prop extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>;
      </div>
    );
  }
}

export default App_prop;
