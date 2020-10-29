import React, { Component } from "react";
import "./style.css";

class Combinatorics extends Component {
  render() {
    return (
      <section className="combinatorics">
        <header className="combinatorics_header">
          <table>
            <thead>
              <tr>
                <th>Combinações</th>
                <th>Resultado</th>
              </tr>
            </thead>
            <tbody>
              {this.props.combinatorics.combinatoricsList.map((combinatorics, index) => {
                return (
                  <tr
                    key={index}
                    className="list-combinatorics"
                  >
                    <td>C {this.props.speciman},{index}</td>
                    <td>{combinatorics}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </header>
      </section>
    );
  }
}

export default Combinatorics;
