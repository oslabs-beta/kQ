const express = require('express');

const router = express.Router();

const {
  startKafka,
  // produce,
  // consume,
} = require('../controllers/kafkaController');

const {
  // startKafka,
  produce,
  // consume,
} = require('../controllers/kafkaProducer');

const {
  // startKafka,
  // produce,
  consume,
} = require('../controllers/kafkaConsumer');

router.get('/', startKafka, produce, consume, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
