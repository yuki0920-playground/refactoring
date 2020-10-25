class Account {
  get bankCharge() {
    let result = 4.5;
    if (this.daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    return this.type.overdraftCharge(this)
  }
}

class AccountType {
  overdraftCharge(daysOverdrawn) {
    if (this.isPremium) {
      const baseCharge = 10;
      if (account <= 7)
        return baseCharge;
      else
      return baseCharge + (account - 7) * 0.85;
    } else {
      return account * 1.75;
    }
  }
}
