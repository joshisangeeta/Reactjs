import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

 var data = 123;
 var value1 = this.state.value;
class App_state extends Component {
	constructor(props){
		 super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	getInitialState() {
          return {value: 'Hello!'};
        }
	handleClick() {
   // this.refs.myTextInput.focus();
   this.setState({value: event.target.value});
   
  }
  
  render() {
    return (
	
      <div>
       <input type="text" value={value1} onChange={this.handleChange} />
              <p>{value1}</p>
      </div>
    );
  }
}

export default App_state;
