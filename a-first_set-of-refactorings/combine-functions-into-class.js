readng = {customer: "ivan", quantity: 10, month: 5, year: 2017};

// client1
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const baseCharge = aReading.baseChaerge

// client2
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const baseCharge = aReading.baseChaerge
const texableCharge = aReading.texableCharge

class Reading {
  constructor(customer, quantity, month, year) {
    this._customer = customer;
    this._quantity = quantity;
    this._month = month;
    this._year = year;
  }

  get customer() {return this._customer;}
  get quantity() {return this._quantity;}
  get month() {return this._month;}
  get year() {return this._year;}

  get baseChaerge() {
    return baseRate(this._month, this._year) * this._quantity;
  }

  get texableCharge() {
    Math.max(0, this.baseChaerge - taxThreshold(this._year));
  }
}
