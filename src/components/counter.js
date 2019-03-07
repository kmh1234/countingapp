import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
  state = {
    count: this.props.value
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1})
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'none' : count;
  }

  getClasses() {
    let classes = "btn btn-outline-";
    classes += (this.props.id === "Blue") ? "primary" : ""
    classes += (this.props.id === "Green") ? "success" : ""
    classes += (this.props.id === "Red") ? "danger" : ""
    classes += (this.props.id === "Yellow") ? "warning" : ""
    return classes;
  }
 
 render() {

    return(
      <div className="Counter">
            <span className={this.getClasses()}>
              {this.formatCount()}
            </span>
            <button type="button" class="btn btn-secondary"
              onClick={() => this.handleIncrement()}>increment
            </button>
            <button type="button" class="btn btn-info"
              onClick={() => this.handleDecrement()}>Decrement
            </button>
      </div>
    )
  }
}


export default Counter;
