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
    return (
      <div className="App">
        <header className="App-header">
          <Label text={"Sucesso:"} />
          <Input
            placeholder={"Digite o valor para sucesso"}
            value={this.state.quantitySuccess}
            onQuantityChange={this.handleSuccessChange}
          />

          <Label text={"Falha:"} />
          <Input
            placeholder={"Digite o valor para falha"}
            value={this.state.quantityFail}
            disabled={true}
          />

          <Label text={"Numero de amostra"} />
          <Input
            placeholder={"Digite o valor para amostra"}
            onQuantityChange={this.handleSpecimanChange}
          />

          <Combinatorics
            speciman={this.state.quantitySpeciman}
            combinatorics={this.combinatorics}
          />

          <DistributionTable
            distribution={this.distribution}
          />
        </header>
      </div>
    );
  }
}

export default App;
