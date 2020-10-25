import React, { Component } from "react";
import "./style.css";

class Label extends Component {
  render() {
    return (
      <section className="label">
        <header className="label_header">
          <label>{this.props.text}</label>
        </header>
      </section>
    );
  }
}

export default Label;
