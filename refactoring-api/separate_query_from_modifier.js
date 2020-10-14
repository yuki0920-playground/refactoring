function alertForMiscreant (people) {
  for (const person of people) {
    if (person === 'Don') {
      setOfffAlarms();
      return 'Don';
    }
    if (person === 'John') {
      setOfffAlarms();
      return 'John';
    }
  }
  return '';
}
