import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var names = ['Rajesh', 'Rajkumar', 'Dhruva'];
var arr = [
        <h1 key="1">Hello world!</h1>,
        <h2 key="2">React is awesome</h2>,
      ];
class App_arr extends Component {
  render() {
    return (
      <div className="App3">
        {
          names.map(function (name, index) {
            return <div key={index}>Hello, {name}!</div>
          })
	    }
		{arr}
      </div>
    );
  }
}

export default App_arr;
