const organization = new Organization('Acme Gooseberries', 'GB')

// # client
result += `<h1>${organization.name}</h1>`

class Organization{
  constructor(data) {
    this.name = data.name;
    this.country = data.country;
  }
  get name() {return this.name};
}
