const axios = require('axios');
// const printHello = () => console.log('hello');

// let num = 0;

const trackProducer = (producer) => {
  const { REQUEST } = producer.events;
  const sendListener = producer.on(REQUEST, (e) => {
    const url = 'http://localhost:5000/producer';
    const { size, pendingDuration, sentAt } = e.payload;
    const data = { size, pendingDuration, sentAt };
    axios.post(url, { data });
  });
};

// create for consumer
const trackConsumer = (consumer) => {
  const { REQUEST } = consumer.events;
  const sendListener = consumer.on(REQUEST, (e) => {
    const url = 'http://localhost:5000/consumer';
    const { size, pendingDuration, sentAt } = e.payload;
    const data = { size, pendingDuration, sentAt };
    console.log(
      'im here CONSUMER------------------------------------------------->'
    );
    console.log('consumerPendingDuration:', pendingDuration);
    // console.log(`data: ${Object.keys(data)}`);
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
