const express = require('express');
const api = require('./api/api');

const app = express();
const PORT = 3000;

app.use('/api', api);

app.listen(PORT);
