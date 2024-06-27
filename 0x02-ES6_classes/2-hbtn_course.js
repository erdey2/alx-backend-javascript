export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      console.log('TypeError: Name must be a string');
    } else if (typeof length !== 'number') {
      console.log('TypeError: Length must be a number');
    } else if (Array.isArray(students) && students.every((item) => typeof item !== 'string')) {
      console.log('TypeError: Students must be array of strings');
    } else {
      this._name = name;
      this._length = length;
      this._students = students;
    }
  }

  setName(name) {
    this._name = name;
  }

  getName() {
    return this._name;
  }

  setLength(length) {
    this._length = length;
  }

  getLength() {
    return this._length;
  }

  setStudents(students) {
    this._students = students;
  }

  getStudents() {
    return this.__students;
  }
}
