import React, { Component } from "react";
import "./App.css";
import { Input, Label, Combinatorics, DistributionTable } from "./components";
import { Combinatorics as CombinatoricsClass, Distribution } from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantitySpeciman: 0,
      quantitySuccess: 0,
      quantityFail: 100
    };
    this.combinatorics = new CombinatoricsClass();
    this.distribution = new Distribution();
    this.handleSpecimanChange = this.handleSpecimanChange.bind(this);
    this.handleSuccessChange = this.handleSuccessChange.bind(this);
  }

  handleSpecimanChange(quantity) {
    this.combinatorics.generateListCombinatoric(quantity);
    this.distribution.generateListDistribution(quantity, this.state.quantitySuccess, this.state.quantityFail, this.combinatorics.combinatoricsList);
    this.setState({
      ...this.state,
      quantitySpeciman: Number(quantity)
    });
  }

  handleSuccessChange(quantity) {
    const fail = 100 - Number(quantity);
    this.setState({
      ...this.state,
      quantityFail: fail,
      quantitySuccess: Number(quantity)
    });
  }

  render() {
    const state = this.state;
    const components = 
    <div className="tables">
      <Combinatorics
        speciman={this.state.quantitySpeciman}
        combinatorics={this.combinatorics}
      />
      <DistributionTable
        distribution={this.distribution}
      />
    </div>;
    const showCombinatoricsAndDistribution = (state.quantitySuccess &&
      state.quantityFail &&
      state.quantitySpeciman) ? components : <Label text={"Aguardando dados de entrada"} />;
    return (
      <div className="App">
        <header className="App-header">
          <section className="inputs">
            <div className="app_inputs">
              <Label text={"Sucesso: "} />
              <Input
                placeholder={"Digite o valor para sucesso"}
                value={this.state.quantitySuccess}
                type={"number"}
                onQuantityChange={this.handleSuccessChange}
              />
            </div>
            <div className="app_inputs">
              <Label text={"Falha: "} />
              <Input
                placeholder={"Digite o valor para falha"}
                value={this.state.quantityFail}
                type={"number"}
                disabled={true}
              />
            </div>

            <div className="app_inputs">
              <Label text={"Numero de amostra: "} />
              <Input
                placeholder={"Digite o valor para amostra"}
                type={"number"}
                onQuantityChange={this.handleSpecimanChange}
              />
            </div>
          </section>

          {showCombinatoricsAndDistribution}
        </header>
      </div>
    );
  }
}

export default App;
