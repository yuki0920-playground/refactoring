class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }
  validateType(arg) {
    if (!['engineer', 'manager', 'salesman'].includes(arg))
      throw new Error {return `${this._name} ${this._type}`};
  }
  toString( ) {return `${this._name} ${this._type}`;}
}
