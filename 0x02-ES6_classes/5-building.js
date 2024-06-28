export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new Error('sqft must be number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return thsi._sqft;
  }
  
  evacuationWarningMessage() {
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}
