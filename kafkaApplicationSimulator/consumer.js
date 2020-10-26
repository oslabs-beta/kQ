const { Kafka } = require('kafkajs');
// const msg = process.argv[2];

run();
async function run() {
  try {
    const kafka = new Kafka({
      clientId: 'myapp',
      brokers: ['Jonathans-iMac.local:9092'],
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
