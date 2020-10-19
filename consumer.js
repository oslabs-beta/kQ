const { Kafka } = require('kafkajs');
const msg = process.argv[2];

run();
async function run() {
  try {
    const kafka = new Kafka({
      clientId: 'myapp',
      brokers: ['Weis-NB.local:9092'],
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
          `RVD Msg ${result.message.value} on partition ${result.partition}`
        );
      },
    });
  } catch (ex) {
    console.error(`something bad happened ${ex}`);
  } finally {
  }
}
