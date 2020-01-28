import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



var names = ['Rajesh', 'Rajkumar', 'Dhruva'];
class App2 extends Component {
  render() {
    return (
      <div className="App3">
        {
          names.map(function (name, index) {
            return <div key={index}>Hello, {name}!</div>
          })
        }
      </div>
    );
  }
}

export default App2;
