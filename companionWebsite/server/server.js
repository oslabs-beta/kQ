const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.json());

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
