export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(size) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be number');
    }
    this._size = size;
  }

  get size() {
    return this._size;
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw new TypeError('location must be string');
    }
    this._location = location;
  }

  get location() {
    return this._location;
  }

  valueof() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
