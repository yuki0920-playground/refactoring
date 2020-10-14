function alertForMiscreant (people) {
  if (findMiscreant(people) !== '') setOffAlerms();
}

function findMiscreant (people) {
  for (const person of people) {
    if (person === 'Don') {
      return;
    }
    if (person === 'John') {
      return;
    }
  }
  return '';
}
