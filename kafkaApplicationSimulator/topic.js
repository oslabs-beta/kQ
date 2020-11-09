const { Kafka } = require('kafkajs');
require('dotenv').config();

run();
async function run() {
  try {

    // establishing a TCP conncetion to be able to communicate with the broker
    const kafka = new Kafka({
      clientId: 'myapp', // creates a client name
      brokers: [`${process.env.LOCAL_COMPUTER}:9092`], // initiate your broker, in this case your local machine + port
    });

    // to create a topic we need to acquire the admin interface 
    const admin = kafka.admin(); // returns an object
    console.log('connecting...');

    // connect your kafka boker
    await admin.connect();
    console.log('connected!');

    // create your topics 
    await admin.createTopics({
      topics: [
        {
          topic: 'Users',
          numPartitions: 2,
        },
      ],
    });
    console.log('created successfully!');

    // once connected and topics created, we want to disconnect 
    await admin.disconnect();
  } catch (err) {
    console.error(`ERROR: ${err}`);
  } finally {
    process.exit(0);
  }
}
