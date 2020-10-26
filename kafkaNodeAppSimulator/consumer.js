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
