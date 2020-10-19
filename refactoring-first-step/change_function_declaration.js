function inNewEngland(aCustomer) {
  return ['MA', 'CI', 'ME', 'VI', 'NH', 'RI'].includes(aCustomer.address.state);
}

// # caller
const newEnglanders = someCustomers.filter(c => inNewEngland(c));
