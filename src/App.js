import React, { Component } from "react";
import './App.css';
import { Input, Label, Combinatorics } from "./components";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { quantitySpeciman: 0 };
    this.handleSpecimanChange = this.handleSpecimanChange.bind(this);
  }

  handleSpecimanChange (quantity) {
    this.setState({ ...this.state, quantitySpeciman: Number(quantity) });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Label text={"Sucesso:"}/>
          <Input placeholder={"Digite o valor para sucesso"}/>
  
          <Label text={"Falha:"}/>
          <Input placeholder={"Digite o valor para falha"}/>
  
          <Label text={"Numero de amostra"}/>
          <Input
            placeholder={"Digite o valor para amostra"}
            onQuantityChange={this.handleSpecimanChange}
          />
  
          <Combinatorics
            speciman={this.state.quantitySpeciman}
          />
        </header>
      </div>
    );
  }
}

export default App;
