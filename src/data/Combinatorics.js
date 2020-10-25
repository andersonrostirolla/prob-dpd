export default class Combinatorics {
  constructor() {
    this._combinatoricsList = []
  }

  calculateFactorial (number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++)
      factorial = factorial * i;
    return factorial;
  }
  
  calculateCombinactorics(speciman, row) {
    return this.calculateFactorial(speciman)/(this.calculateFactorial(speciman - row) * this.calculateFactorial(row));
  }

  generateListCombinatoric (speciman) {
    this._combinatoricsList = [];
    for(let i = 0; i <= speciman; i++) {
      this._combinatoricsList.push(this.calculateCombinactorics(speciman, i));
    }
  }

  get combinatoricsList () {
    return this._combinatoricsList;
  }
}
