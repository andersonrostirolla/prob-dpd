import React, { Component } from "react";
import "./style.css";

class Combinatorics extends Component {
  render() {
    return (
      <section className="combinatorics">
        <header className="combinatorics_header">
          <table>
            <td>Combinações</td>
            <tr>
              {this.props.combinatorics.combinatoricsList.map((combinatorics, index) => {
                return (
                  <tr
                    key={index}
                    className="list-combinatorics"
                  >
                    C {this.props.speciman},{index} = {combinatorics}
                  </tr>
                );
              })}
            </tr>
          </table>
        </header>
      </section>
    );
  }
}

export default Combinatorics;
