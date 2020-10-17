const express = require('express');
const router = express.Router();

const { startKafka } = require('../controllers/kafkaController');

router.get('/', startKafka, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
