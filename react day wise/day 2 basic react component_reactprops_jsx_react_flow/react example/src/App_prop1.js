import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App_prop1 extends Component {
  render() {
    return (
      <ol>
              {
                React.Children.map(this.props.children, function (child) {
                  return <li>{child}</li>;
                })
              }
            </ol>
    );
  }
}

export default App_prop1;
