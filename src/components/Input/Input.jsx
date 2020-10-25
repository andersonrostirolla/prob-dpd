import React, { Component } from "react";
import "./style.css";

class Input extends Component {
  constructor (props) {
    super(props);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
  }

  handleChangeQuantity (event) {
    event.stopPropagation();
    if (this.props.onQuantityChange) {
      this.props.onQuantityChange(event.target.value);
    }
  }

  render() {
    return (
      <section className="input">
        <header className="input_header">
          <input
            type="number"
            placeholder={this.props.placeholder}
            disabled={this.props.disabled}
            value={this.props.value}
            onChange={this.handleChangeQuantity}
          ></input>
        </header>
      </section>
    );
  }
}

export default Input;
