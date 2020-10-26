const express = require('express');

const router = express.Router();

const { produceMessage } = require('../controllers/kafkaController');

router.post('/send', produceMessage, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
