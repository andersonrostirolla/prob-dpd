export default class Distribution {
  constructor() {
    this._distributionList = []
  }

  calculateDistributions (row, speciman, successValue, failValue, combinatoric) {
    const sucess = successValue / 100;
    const fail = failValue / 100;
    return (Math.pow(sucess, row)*(Math.pow(fail, speciman - row))*combinatoric);
  }

  generateListDistribution (speciman, successValue, failValue, combinatoricsList) {
    this._distributionList = [];
    for(let i = 0; i <= speciman; i++) {
      this._distributionList.push(this.calculateDistributions(i, speciman, successValue, failValue, combinatoricsList[i]));
    }
  }

  get distributionList () {
    return this._distributionList;
  }
}
