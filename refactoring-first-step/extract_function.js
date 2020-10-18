function printOwing(invoice) {
  printBanner();

  recordDueDate(invoice);

  const outstanding = calculateOutstanding();
  printDetails(invoice, outstanding);
}

function calculateOutstanding() {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}
