export default class Building {
  constructor(sqft) {
    this.sqft = sqft; // use the setter to initialize sqft

  if (this.constructor !== Building) {
    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new Error(
       'Class extending Building must override evacuationWarningMessage',
      );
    }
  }
 }
  
  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  // This method must be overridden by subclasses
  // Disable ESLint rule for this method
  /* eslint-disable class-methods-use-this */
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
  /* eslint-enable class-methods-use-this */
}
