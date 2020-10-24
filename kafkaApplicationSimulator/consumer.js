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

const kafkaController = {};

kafkaController.consumer = async (req, res, next) => {
  try {
    const Consumer = kafka.Consumer;
    const client = new kafka.KafkaClient({ kafkaHost: 'Weis-NB.local:9092' });

    const partition = msg[0].toLowerCase() < 'n' ? 0 : 1;
    const consumer = new Consumer(
      client,
      [
        {
          topic: 'Users',
          offset: 0,
          partition: partition,
        },
      ],
      {
        autoCommit: false,
      }
    );
    // async?
    consumer.on('message', function (message) {
      console.log(`this is the consumer message ${message}`);
    });

    consumer.on('error', function (err) {
      console.log(`Consumer Error: ${err}`);
    });
  } catch (err) {
    console.log(err);
  }
};
