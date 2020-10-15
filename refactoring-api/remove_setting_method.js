class Person {
  get name() {return this._name;}
  set name(arg) {this._name = arg;}
  get id() {return this._id;}
  set id(arg) {this._id = arg;}
}

// #Client
const martin = new Peson();
martin.name = 'martin';
martin.id = '1234';
