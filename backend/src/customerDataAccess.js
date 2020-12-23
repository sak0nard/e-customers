const fs = require('fs').promises;

class CustomerDataAccess {
  async getAll() {
    const fileData = (await fs.readFile('./data/customers.json')).toString();
    const customers = JSON.parse(fileData);
    return customers;
  }
}

module.exports = { CustomerDataAccess };
