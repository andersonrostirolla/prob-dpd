import React, { Component } from "react";
import "./style.css";

class DistributionTable extends Component {
  render() {
    return (
      <section className="distributions">
        <header className="distributions_header">
          <table>
            <td>Tabela de distribuição</td>
            <tr>
              {this.props.distribution.distributionList.map((distribution, index) => {
                return (
                  <tr
                    key={index}
                    className="list-distribution"
                  >
                    <td>{index}</td><td>{distribution}</td>
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

export default DistributionTable;
