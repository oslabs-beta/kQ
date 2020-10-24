const express = require('express');
const api = require('./api/api');
const { printHello } = require('kafkaq-monitor');

const app = express();
const PORT = 4000;

app.use(express.json());

app.use('/api', api);

app.get('/', (req, res) => {
  printHello();
  res.sendStatus(200);
});

app.listen(PORT);
