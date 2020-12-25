const express = require('express');
const cors = require('cors');
const { config } = require('./src/config');
const { CustomerDataAccess } = require('./src/customerDataAccess');
const app = express();

const customerDao = new CustomerDataAccess();

app.use(express.json());
app.use(cors());

app.get('/customers', async (_, res) => {
  try {
    const customers = await customerDao.getAll();
    res.send({
      data: customers
    });
  } catch(e) {
    console.error(JSON.stringify(e));
    res.status(500).send({
      error: 'Unexpected error'
    });
  }
});

app.listen(config.server.port, () => {
  console.log(`Example app listening at http://localhost:${config.server.port}`);
});
