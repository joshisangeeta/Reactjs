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

  // a method that is called when an
  // object of this type 'Class' is created
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement(product) {
    console.log("Increment Clicked", this.state.count + " " + product.id);
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    //JSX Expression
    return (
      //Fragment - allows a list of children to be
      //grouped together without needing a parent node
      <React.Fragment>
        {/*<img src={this.state.imgURL} />*/}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          style={{ fontSize: 30 }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {/* 
                Getting a string 'tag' and 
                mapping it to a JSX expression
                which gets compiled to a react
                element which is a plain JS Object
            */}
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
