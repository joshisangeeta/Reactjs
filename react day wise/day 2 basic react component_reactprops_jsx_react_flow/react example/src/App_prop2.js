import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

 var data = 123;
 
class App_prop2 extends Component {
	propTypes: {
          title: React.PropTypes.string.isRequired
        },
	
  render() {
    return (
      <h1> {this.props.title} </h1>;
    );
  }
}

export default App_prop2;
