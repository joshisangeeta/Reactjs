import React, { Component } from "react";

// using the componet class
class Counter extends Component {
  //LifeCycle hook
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // An Ajax call that is called if a previous prop
      // is different to the current prop
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  //State - state object includes any data that
  // the component needs

  styles = {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 20
  };

  render() {
    console.log("Counter - Rendered");
    //JSX Expression
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={{ fontSize: 30 }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br />
        <br />
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m2 badge-";
    classes += this.props.conter === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
