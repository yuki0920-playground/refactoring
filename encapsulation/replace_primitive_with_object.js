class Order {
  constructor(data) {
    this.priority = new Priority(data.priority);
  }
  get priorityString() {return this.priority.toString;}
  set priority(aString) {this.priority = new Priority(aString);}
}

class Priority {
  constructor(value) {this.value = value;}
  toString() {return this.value;}
  get index() {
    return Priority.legalValues().findIndex(legalValue =>
      legalValue === this.value
    );
  }
  static legalValues() {return ['low', 'normal', 'high', 'rush'];}
  higherThan(otherPriority) {
    this.index > otherPriority.index;
  }
  lowerThan(otherPriority) {
    this.index < otherPriority.index;
  }
}

// # client
highPriorityCount = orders.filter(order =>
  order.priorityString.higherThan(new Priority('normal'))
).length
