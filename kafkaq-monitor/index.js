const axios = require('axios');
// const printHello = () => console.log('hello');

// let num = 0;

const trackProducer = (producer) => {
  const { REQUEST } = producer.events;
  const sendListener = producer.on(REQUEST, (e) => {
    const url = 'http://localhost:5000/data';
    const { size, apiName, sentAt } = e.payload;
    const data = { size, apiName, sentAt };
    console.log('this is the api name:', apiName);
    // console.log(`data: ${Object.keys(data)}`);
    axios.post(url, { data });

    // console.log(`REQUEST size: ${e.payload.size}`);
    // console.log(`REQUEST duration: ${e.payload.duration}`);
    // console.log(`REQUEST sentAt: ${e.payload.sentAt}\n`);
    // num += e.payload.size;
    // console.log(`num is: ${num}`);
  });

  // printHello();
};

module.exports = { trackProducer };
