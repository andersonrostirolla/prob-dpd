import React, { Component } from "react";
import { Input, Label } from '../../components'
import "./style.css";
import CardDistribution from "../CardDistribution/CardDistribution";

class DistributionTable extends Component {
  constructor (props) {
    super(props);
    this.state = {
      listCalcs: [],
      textInfo: ''
    };
  }

  selectDistribution (event) {
    const selected = 'selected';
    const classList = event.target.classList;
    if (!Array.from(classList).includes(selected)) {
      classList.add(selected);
    } else {
      classList.remove(selected);
    }
  }

  calculateDistribution () {
    const itemsSelected = Array.from(document.querySelectorAll('.selected'));
    const sumDistribution = itemsSelected.reduce((sum, item) => {
      item.classList.remove('selected');
      return sum + Number(item.innerText);
    }, 0);
    const index = this.state.listCalcs.length;
    const listCalcs = this.state.listCalcs;
    listCalcs.push({
      index,
      textInfo: this.state.textInfo,
      sum: sumDistribution.toFixed(6)
    });
    this.setState({
      ...this.state,
      listCalcs
    });
    document.querySelector('.distributions_info').value = '';
  }

  handleChange(text) {
    this.setState({
      ...this.state,
      textInfo: text
    });
  }

  render() {
    return (
      <section className="distributions">
        <header className="distributions_header">
          <table className="distributions_table">
            <thead>
              <tr>
                <th>Tabela de distribuição</th>
              </tr>
              <tr>
                <th>x</th>
                <th>P(x)</th>
              </tr>
            </thead>
            <tbody>
              {this.props.distribution.distributionList.map((distribution, index) => {
                return (
                  <tr
                    key={index}
                    className="distributions_list"
                  >
                    <td>{index}</td>
                    <td
                      className={`distributions_${index}`}
                      onClick={this.selectDistribution}
                    >{distribution}</td>
                  </tr>
                );
              })}
              <tr>
                <td>Soma total</td>
                <td>{this.props.distribution.getSumAllDistributions()}</td>
              </tr>
            </tbody>
          </table>
          <div className="distributions_calc">
            <Input
              classInput={"distributions_info"}
              placeholder={"Informaçao que irá calcular"}
              type={"text"}
              onChangeValue={this.handleChange.bind(this)}
            />
            <button
              className="distributions_button"
              onClick={this.calculateDistribution.bind(this)}
            >Calcular</button>
          </div>
          <CardDistribution
            listCalcs={this.state.listCalcs}
          />
        </header>
      </section>
    );
  }
}

export default DistributionTable;
