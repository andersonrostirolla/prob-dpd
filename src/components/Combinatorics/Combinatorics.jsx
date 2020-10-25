import React, { Component } from "react";
import "./style.css";

class Combinatorics extends Component {
  calculateFactorial (number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++)
      factorial = factorial * i;
    return factorial;
  }
  
  calculateCombinactorics(speciman, row) {
    return this.calculateFactorial(speciman)/(this.calculateFactorial(speciman - row) * this.calculateFactorial(row));
  }

  createCombinatoric(speciman, row) {
    return <tr>{speciman},{row} = {this.calculateCombinactorics(speciman, row)}</tr>;
  }
  
  createCombinatorics(speciman) {
    const listCombinatorics = [];
    for(let i = 0; i <= speciman; i++) {
      listCombinatorics.push(this.createCombinatoric(speciman, i));
    }
    return listCombinatorics;
  }

  render() {
    return (
      <section className="combinatorics">
        <header className="combinatorics_header">
          qt: {this.props.speciman} !!
          <table>
            <td>Combinações</td>
            <tr>
              {this.createCombinatorics(this.props.speciman)}
            </tr>
          </table>
        </header>
      </section>
    );
  }
}

export default Combinatorics;
