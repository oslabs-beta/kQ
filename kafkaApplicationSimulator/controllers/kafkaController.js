const { Kafka } = require('kafkajs');
const { trackProducer } = require('kafkaq-monitor');
require('dotenv').config();

const kafkaController = {};

// creates producers and establishes a connection to the Kafka broker
kafkaController.produceMessage = async (req, res, next) => {
  console.log('hi');
  try {

    // establishing a TCP conncetion to be able to communicate with the broker
    const kafka = new Kafka({
      clientId: 'myapp', // creates a client name
      brokers: [`${process.env.LOCAL_COMPUTER}:9092`], // initiate your broker, in this case your local machine + port
    });

    // pull the producer object in order to create a producer 
    const producer = kafka.producer();
    console.log('connecting...');

    // connect your producer to the broker 
    await producer.connect();
    console.log('connected!');

    // invokes the imported npm module to track producer data 
    trackProducer(producer);

    // deconstruct the object that holds the message produced by the Golang server
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

    // assign a value (0 or 1) to the variable based on the condition, given the message produced by Golang server
    const partition = msg[0].toLowerCase() < 'n' ? 0 : 1;

    // distributes the messages to the topics and its partition
    const result = await producer.send({
      topic: 'Users',   // send to User topic declared previously 
      messages: [
        {
          value: msg, // the actual message produced
          partition: partition, // specifies to which partition the message needs to be send to
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
