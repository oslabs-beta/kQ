const { Kafka } = require('kafkajs');
const { trackConsumer } = require('../kafkaq-monitor/index.js');
require('dotenv').config();

run();

// creates consumers and establishes a connection to the Kafka broker
async function run() {
  try {

    // establishing a TCP conncetion to be able to communicate with the broker
    const kafka = new Kafka({
      clientId: 'myapp',  // creates a client name
      brokers: [`${process.env.LOCAL_COMPUTER}:9092`], // initiate your broker, in this case your local machine + port
    });

    // any consumer created will belong to the same goupe called test
    const consumer = kafka.consumer({
      groupId: 'test',
    });
    console.log('connecting...');

    // connect your consumer to the broker
    await consumer.connect();
    console.log('connected!');

    // subscription the consumer to the specified topic
    await consumer.subscribe({
      topic: 'Users',
      fromBeginning: true,  // consumes all messages create by the producer from the beginnin
    });

    // invokes the imported npm module to track consumer data
    trackConsumer(consumer);

    // runs a open connection with the topic and pulls all the messages 
    await consumer.run({
      // prints each message create by the producer
      eachMessage: async (result) => {
        console.log(
          `MSG: ${result.message.value} PARTITION: ${result.partition}`
        );
      },
    });

  } catch (err) {
    console.log(`ERROR: ${err}`);

  } finally {
  }

}
