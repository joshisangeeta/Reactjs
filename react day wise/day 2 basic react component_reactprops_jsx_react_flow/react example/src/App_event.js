import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 var data = 123;
 class App_event extends Component {
	constructor(props){
		 super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
   // this.refs.myTextInput.focus();
   //alert( this.refs.myTextInput.value);
   this.refs.ll.value=this.refs.myTextInput.value;
  }
  render() {
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={this.handleClick} />
		
		<input type="text" ref="ll" />
	 </div>
    );
  }
}

export default App_event;








