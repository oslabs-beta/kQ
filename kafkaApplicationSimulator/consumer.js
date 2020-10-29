const { Kafka } = require('kafkajs');
const { trackConsumer } = require('../kafkaq-monitor/index.js');
require('dotenv').config();

run();
async function run() {
  try {
    const kafka = new Kafka({
      clientId: 'myapp',
      brokers: [`${process.env.LOCAL_COMPUTER}:9092`],
    });
    const consumer = kafka.consumer({
      groupId: 'test',
    });
    console.log('connecting...');
    await consumer.connect();
    console.log('connected!');

    await consumer.subscribe({
      topic: 'Users',
      fromBeginning: true,
    });

    trackConsumer(consumer);

    await consumer.run({
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
