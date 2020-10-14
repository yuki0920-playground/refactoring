function deliveryDate(anOrder) {
  let deliveryTime;
  if (['MA', 'CA', 'NY'].includes(anOrder.deliveryState)) deliveryTime = 2;
  else if (['ME', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 3;
  else deliveryTime = 4;
  return anOrder.placedOn.plusDays(2 + deliveryTime);
}

function rushDeliveryDate(anOrder) {
  let deliveryTime;
  if (['MA', 'CI'].includes(anOrder.deliveryState)) deliveryTime = 1;
  else if (['NY', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 2;
  else deliveryTime = 3;
  return anOrder.placedOn.plusDays(1 + deliveryTime);
}

// # ClientCode
// aShipment.deliveryDate = rushDeliveryDate(anOrder);
// aShipment.deliveryDate = deliveryDate(anOrder);
