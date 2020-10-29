const { Kafka } = require('kafkajs');
const { trackProducer } = require('../../kafkaq-monitor/index.js');
require('dotenv').config();

const kafkaController = {};

kafkaController.produceMessage = async (req, res, next) => {
  console.log('hi');
  try {
    const kafka = new Kafka({
      clientId: 'myapp',
      brokers: [`${process.env.LOCAL_COMPUTER}:9092`],
    });
    const producer = kafka.producer();
    console.log('connecting...');
    await producer.connect();
    console.log('connected!');
    trackProducer(producer);
    const { msg } = req.body;
    // console.log(msg);

    // const { REQUEST } = producer.events;
    // const sendListener = producer.on(REQUEST, (e) => {
    //   const { size, pendingDuration, sentAt } = e.payload;
    //   const data = { size, pendingDuration, sentAt };
    //   console.log(`data ${data}`)
    // })

    // sendListener()

    // console.log(` BEFORE -------> ${trackProducer(producer)}`);

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

    // console.log(` AFTER -------> ${trackProducer(producer)}`);

    console.log(`send successfully! ${JSON.stringify(result)}`);
    await producer.disconnect();
  } catch (err) {
    console.error(`ERROR: ${err}`);
  } finally {
    next();
  }
};

module.exports = kafkaController;
