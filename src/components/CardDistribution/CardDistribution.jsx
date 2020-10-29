import React, { Component } from "react";
import { Label } from '../../components'
import "./style.css";

class CardDistribution extends Component {
  render() {
    return (
      <section className="card-distribution">
        <header className="card-distribution_header">
          {this.props.listCalcs.map(calcs => {
            return (
              <div
                className="card-distribution_card"
                key={calcs.index}
              >
                <Label
                  className="card-distribution_text"
                  text={calcs.textInfo}
                />
                <Label
                  className="card-distribution_sum"
                  text={calcs.sum}
                />
              </div>
            )
          })}
        </header>
      </section>
    );
  }
}

export default CardDistribution;
