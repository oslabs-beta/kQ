const axios = require('axios');

// function invoked in kafka topic.js 
// This method tracks producer metrics and sends them to the locally running server
const trackProducer = (producer) => {
  const { REQUEST } = producer.events;
  const sendListener = producer.on(REQUEST, (e) => {
    const url = 'http://localhost:5000/producer';

    // producer data that are being tracked on the kafka producer
    const { size, pendingDuration, sentAt } = e.payload;
    const data = { size, pendingDuration, sentAt };

    // create a HTTP connection to server.js (kafkaQ server) to endpoint :5000/producer and send over the data object
    axios.post(url, { data });
  });
};

// function invoked in kafka consumer.js 
// This method tracks consumer metrics and sends them to the locally running server
const trackConsumer = (consumer) => {
  const { REQUEST } = consumer.events;

  // kafkajs method to receive events from consumers  
  const sendListener = consumer.on(REQUEST, (e) => {
    const url = 'http://localhost:5000/consumer';

    // consumer data that are being tracked on the kafka consumers
    const { size, pendingDuration, sentAt } = e.payload;
    const data = { size, pendingDuration, sentAt };
    console.log(
      'im here CONSUMER------------------------------------------------->'
    );
    console.log('consumerPendingDuration:', pendingDuration);
    // console.log(`data: ${Object.keys(data)}`);

    // create a HTTP connection to server.js (kafkaQ server) to endpoint :5000/consumer and send over the data object
    axios.post(url, { data });
  });
};

module.exports = { trackProducer, trackConsumer };
