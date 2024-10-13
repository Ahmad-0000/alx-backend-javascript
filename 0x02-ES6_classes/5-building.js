export default class Bulding {
  constructor(sqft) {
    this._sqft = sqft;
    this.constructor[Symbol.species]();
  }

  static [Symbol.species]() {
    if (typeof this.prototype.evacuationWarningMessage !== 'function') {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    return this;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
