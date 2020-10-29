import React, { Component } from "react";
import "./style.css";

class Input extends Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    event.stopPropagation();
    if (this.props.onQuantityChange) {
      this.props.onQuantityChange(event.target.value);
    }
    if (this.props.onChangeValue) {
      this.props.onChangeValue(event.target.value);
    }
  }

  render() {
    return (
      <section className="input">
        <header className="input_header">
          <input
            type={this.props.type}
            placeholder={this.props.placeholder}
            disabled={this.props.disabled}
            value={this.props.value}
            className={this.props.classInput}
            onChange={this.handleChange}
          ></input>
        </header>
      </section>
    );
  }
}

export default Input;
