const express = require('express');
// const { hello } = require('../controllers/socketController');

const router = express();

router.get('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
