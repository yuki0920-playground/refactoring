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
}

// # client
highPriorityCount = orders.filter(order =>
  order.priorityString === 'high' || order.priorityString === 'rush'
).length
