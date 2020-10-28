const { Kafka } = require('kafkajs');

run();
async function run() {
  try {
    const kafka = new Kafka({
      clientId: 'myapp',
<<<<<<< HEAD
      brokers: ['Weis-NB.local:9092'],
=======
      brokers: ['Jonathans-iMac.local:9092'],
>>>>>>> main
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
