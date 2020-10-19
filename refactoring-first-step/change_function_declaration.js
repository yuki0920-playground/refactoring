function inNewEngland(stateCode) {
  return ['MA', 'CI', 'ME', 'VI', 'NH', 'RI'].includes(stateCode);
}

// # caller
const newEnglanders = someCustomers.filter(c => inNewEngland(c.address.state));
