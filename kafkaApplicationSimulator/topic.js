const { Kafka } = require('kafkajs');
require('dotenv').config();

run();
async function run() {
  try {
    const kafka = new Kafka({
      clientId: 'myapp',
      brokers: [`${process.env.LOCAL_COMPUTER}:9092`],
    });
    const admin = kafka.admin();
    console.log('connecting...');
    await admin.connect();
    console.log('connected!');
    await admin.createTopics({
      topics: [
        {
          topic: 'Users',
          numPartitions: 2,
        },
      ],
    });
    console.log('created successfully!');
    await admin.disconnect();
  } catch (err) {
    console.error(`ERROR: ${err}`);
  } finally {
    process.exit(0);
  }
}
