//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import App1 from './App1';
//import App2 from './App2';
//import App_arr from './App_arr';
//import App_prop from './App_prop';
//import App_prop1 from './App_prop1';
//import App_prop2 from './App_prop2';
//import App_event from './App_event';
//import App_state from './App_state';
//import React_router from './React_router';
//import React2 from './React2';
//import App from './App_redux'
//import st from './App_redux'
//import { BrowserRouter } from 'react-router-dom';
//import { Provider, connect } from 'react-redux'

//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<App1 />, document.getElementById('root1'));
//ReactDOM.render(<App2 />, document.getElementById('root2'));
//ReactDOM.render(<App_arr />, document.getElementById('root2'))
//ReactDOM.render(<App_prop name="Rajesh" />, document.getElementById('root2'))

//ReactDOM.render(<App_prop1><span>hello</span><span>allstate</span></App_prop1>, document.getElementById('root2'))

//ReactDOM.render(<App_prop2 title={data} />, document.getElementById('root2'))
//ReactDOM.render(<App_event><App /></App_event>, document.getElementById('root2'))
//ReactDOM.render(<App_state />, document.getElementById('root2'))
//ReactDOM.render(<BrowserRouter><React_router /></BrowserRouter>, document.getElementById('root2'));
//ReactDOM.render(<BrowserRouter><React2 /></BrowserRouter>, document.getElementById('root2'));


//ReactDOM.render(
//<Provider store={st}><App /></Provider>,document.getElementById('root2')
//);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();



/*
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

// Action
const increaseAction = { type: 'increase' }

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

// Store
const store = createStore(counter)

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root2')
)


*/


