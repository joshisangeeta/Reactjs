import React, { Component } from "react";

// using the componet class
class Counter extends Component {
  //State - state object includes any data that
  // the component needs
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
    //imgURL: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    //JSX Expression
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
