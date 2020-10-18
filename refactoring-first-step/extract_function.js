function printOwing(invoice) {
  printBanner();

  recordDueDate(invoice);

  const outstanding = calculateOutstanding();
  printDetails(invoice, outstanding);
}

function reducer (outstanding, order) {outstanding + order};
function calculateOutstandings() {
  invoice.orders.reduce(reducer, 0)
}
