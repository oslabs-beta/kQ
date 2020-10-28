const express = require('express');
const api = require('./api/api');
<<<<<<< HEAD
// const { printHello } = require('kafkaq-monitor');
=======
>>>>>>> main

const app = express();
const PORT = 4000;

app.use(express.json());

app.use('/api', api);

app.listen(PORT);
