// const { Kafka } = require('kafkajs');
// // const msg = process.argv[2];

// run();
// async function run() {
//   try {
//     const kafka = new Kafka({
//       clientId: 'myapp',
//       brokers: ['Weis-NB.local:9092'],
//     });
//     const consumer = kafka.consumer({
//       groupId: 'test',
//     });
//     console.log('connecting...');
//     await consumer.connect();
//     console.log('connected!');

//     await consumer.subscribe({
//       topic: 'Users',
//       fromBeginning: true,
//     });

//     await consumer.run({
//       eachMessage: async (result) => {
//         console.log(
//           `MSG: ${result.message.value} PARTITION: ${result.partition}`
//         );
//       },
//     });
//   } catch (err) {
//     console.log(`ERROR: ${err}`);
//   } finally {
//   }
// }

const kafka = require('kafka-node');

run();
async function run() {
  try {
    const Consumer = kafka.Consumer;
    const client = new kafka.KafkaClient({ kafkaHost: 'Weis-NB.local:9092' });

    const consumer = new Consumer(
      client,
      [
        {
          topic: 'Users-1',
          partitions: 0,
        },
      ],
      {
        autoCommit: false,
        fetchMaxBytes: 1024 * 1024,
      }
    );

    // await?
    consumer.on('message', function (message) {
      console.log(`consumer received message ${JSON.stringify(message)}`);
    });

    consumer.on('error', function (err) {
      console.log(`Consumer Error: ${err}`);
    });
  } catch (err) {
    console.log(err);
  }
}
