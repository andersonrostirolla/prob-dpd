export default class Distribution {
  constructor() {
    this._distributionList = []
  }

  calculateDistributions (row, speciman, successValue, failValue, combinatoric) {
    const sucess = successValue / 100;
    const fail = failValue / 100;
    return (Math.pow(sucess, row)*(Math.pow(fail, speciman - row))*combinatoric).toFixed(6);
  }

  generateListDistribution (speciman, successValue, failValue, combinatoricsList) {
    this._distributionList = [];
    for(let i = 0; i <= speciman; i++) {
      this._distributionList.push(this.calculateDistributions(i, speciman, successValue, failValue, combinatoricsList[i]));
    }
  }

  getSumAllDistributions () {
    return Math.round(this._distributionList.reduce((sum, distribution) => sum + Number(distribution), 0));
  }

  get distributionList () {
    return this._distributionList;
  }
}
