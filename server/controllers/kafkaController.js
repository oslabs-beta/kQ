const axios = require('axios');
const { Kafka } = require('kafkajs');

// Create an instance of Kafka
// const kafka = new Kafka({
//   clientId: 'my-app',
//   brokers: ['kafka1:9092', 'kafka2:9092'],
// });
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: async () => {
    const clusterResponse = await axios
      .get('https://kafka-rest:8082/v3/clusters', {
        headers: { 'Content-Type': 'application/vnd.api+json' },
        mode: 'cors',
      })
      .then((response) => response.json());
    const clusterUrl = clusterResponse.data[0].links.self;

    const brokersResponse = await axios
      .get(`${clusterUrl}/brokers`, {
        headers: { 'Content-Type': 'application/vnd.api+json' },
        mode: 'cors',
      })
      .then((response) => response.json());

    const brokers = brokersResponse.data.map((broker) => {
      const { host, port } = broker.attributes;
      return `${host}:${port}`;
    });

    return brokers;
  },
});

const kafkaController = {};

kafkaController.startKafka = async (req, res, next) => {
  console.log('in sk ctrlr');

  // Produce a message to test-topic
  const producer = kafka.producer();

  await producer.connect();
  await producer.send({
    topic: 'test-topic',
    messages: [{ value: 'Hello KafkaJS user!' }],
  });

  await producer.disconnect();

  // Create a consumer to subscribe to test-topic
  const consumer = kafka.consumer({ groupId: 'test-group' });

  await consumer.connect();
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, parition, message }) => {
      console.log({
        value: message.value.toString(),
      });
    },
  });

  console.log('message done');

  next();
};

module.exports = kafkaController;
