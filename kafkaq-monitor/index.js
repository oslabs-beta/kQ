const axios = require('axios');
// const printHello = () => console.log('hello');

// let num = 0;

// function invoked in kafka topic.js 
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

    console.log(`Consumer REQUEST size: ${e.payload.size}`);
    console.log(`Consumer REQUEST duration: ${e.payload.duration}`);
    console.log(`Consumer REQUEST sentAt: ${e.payload.sentAt}\n`);
    // num += e.payload.size;
    // console.log(`num is: ${num}`);
  });

  // printHello();
};

module.exports = { trackProducer, trackConsumer };
