const { Kafka } = require('kafkajs');
const { trackProducer } = require('../../kafkaq-monitor/index.js');

const kafkaController = {};

kafkaController.produceMessage = async (req, res, next) => {
  console.log('hi');
  try {
    const kafka = new Kafka({
      clientId: 'myapp',
<<<<<<< HEAD
      brokers: ['Weis-NB.local:9092'],
=======
      brokers: ['Jonathans-iMac.local:9092'],
>>>>>>> main
    });
    const producer = kafka.producer();
    console.log('connecting...');
    await producer.connect();
    console.log('connected!');

    const { msg } = req.body;
    // console.log(msg);

    trackProducer(producer);

    const partition = msg[0].toLowerCase() < 'n' ? 0 : 1;
    const result = await producer.send({
      topic: 'Users',
      messages: [
        {
          value: msg,
          partition: partition,
        },
      ],
    });
    console.log(`send successfully! ${JSON.stringify(result)}`);
    await producer.disconnect();
  } catch (err) {
    console.error(`ERROR: ${err}`);
  } finally {
    next();
  }
};

module.exports = kafkaController;
