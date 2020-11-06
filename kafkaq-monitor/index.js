const axios = require('axios');

// This method tracks producer metrics and sends them to the locally running server
const trackProducer = (producer) => {
  const { REQUEST } = producer.events;
  const sendListener = producer.on(REQUEST, (e) => {
    const url = 'http://localhost:5000/producer';
    const { size, pendingDuration, sentAt } = e.payload;
    const data = { size, pendingDuration, sentAt };
    axios.post(url, { data });
  });
};

// This method tracks consumer metrics and sends them to the locally running server
const trackConsumer = (consumer) => {
  const { REQUEST } = consumer.events;
  const sendListener = consumer.on(REQUEST, (e) => {
    const url = 'http://localhost:5000/consumer';
    const { size, pendingDuration, sentAt } = e.payload;
    const data = { size, pendingDuration, sentAt };
    axios.post(url, { data });
  });
};

module.exports = { trackProducer, trackConsumer };
