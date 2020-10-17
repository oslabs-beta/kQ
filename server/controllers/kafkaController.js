// const axios = require('axios');
// const { Kafka } = require('kafkajs');

// // Create an instance of Kafka
// // const kafka = new Kafka({
// //   clientId: 'my-app',
// //   brokers: ['kafka1:9092', 'kafka2:9092'],
// // });
// const kafka = new Kafka({
//   clientId: 'my-app',
//   // brokers: async () => {
//   //   const clusterResponse = await axios
//   //     .get('https://kafka-rest:8082/v3/clusters', {
//   //       headers: { 'Content-Type': 'application/vnd.api+json' },
//   //     })
//   //     .then((response) => response.json());
//   //   const clusterUrl = clusterResponse.data[0].links.self;

//   //   const brokersResponse = await axios
//   //     .get(`${clusterUrl}/brokers`, {
//   //       headers: { 'Content-Type': 'application/vnd.api+json' },
//   //     })
//   //     .then((response) => response.json());

//   //   const brokers = brokersResponse.data.map((broker) => {
//   //     const { host, port } = broker.attributes;
//   //     return `${host}:${port}`;
//   //   });

//   //   return brokers;
//   // },
//   brokers: ['jonathans-imac:9092'],
// });

// const kafkaController = {};

// kafkaController.startKafka = async (req, res, next) => {
//   console.log('in sk ctrlr');

//   // Produce a message to test-topic
//   const producer = kafka.producer();

//   await producer.connect();
//   await producer.send({
//     topic: 'test-topic',
//     messages: [{ value: 'Hello KafkaJS user!' }],
//   });

//   await producer.disconnect();

//   // Create a consumer to subscribe to test-topic
//   const consumer = kafka.consumer({ groupId: 'test-group' });

//   await consumer.connect();
//   await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

//   await consumer.run({
//     eachMessage: async ({ topic, parition, message }) => {
//       console.log({
//         value: message.value.toString(),
//       });
//     },
//   });

//   console.log('message done');

//   next();
// };

// module.exports = kafkaController;

const { Kafka } = require('kafkajs');

const kafkaController = {};

kafkaController.startKafka = async (req, res, next) => {
  try {
    const kafka = new Kafka({
      clientId: 'myapp',
      brokers: ['Jonathans-iMac.local:9092'],
    });

    const admin = kafka.admin();
    console.log('connecting');
    await admin.connect();
    console.log('connected');
    await admin.createTopics({
      topics: [
        {
          topic: 'Users',
          numPartitions: 2,
        },
      ],
    });
    console.log('created successfully');
    // console.log(kafka);
    await admin.disconnect();
  } catch (ex) {
    console.error(`Something bad happened ${ex}`);
  } finally {
    next();
  }
};

kafkaController.produce = async (req, res, next) => {
  try {
        const kafka = new Kafka({
          clientId: 'myapp',
          brokers: ['Jonathans-iMac.local:9092'],
        });

        const producer = kafka.producer();
        console.log('Connecting');
        await producer.connect();
        console.log('Connected');
        const result = await producer.send({
          topic: 'Users',
          messages: [
            {
              value: 'msg',
              partition: 0,
            },
          ],
        });

        console.log(`send successfully ${JSON.stringify(result)}`);
        await producer.disconnect();
      } catch (ex) {
    console.error(`Something bad happened ${ex}`);
  } finally {
    next();
  }
};

kafkaController.consume = async (req, res, next) => {
  try {
    const kafka = new Kafka({
      clientId: 'myapp',
      brokers: ['Jonathans-iMac.local:9092'],
    });

    const consumer = kafka.consumer({
      groupId: 'test',
    });
    console.log('Connecting');
    await consumer.connect();
    console.log('Connected');
    consumer.subscribe({
      topic: 'Users',
      fromBeginning: true,
    });
    await consumer.run({
      eachMessage: async (result) => {
        console.log(
          `received msg from ${result.message.value} on partition ${result.partition}`
        );
      },
    });
  } catch (ex) {
    console.error(`Something bad happened ${ex}`);
  } finally {
    next();
  }
};

// run();

// async function run() {

// }

module.exports = kafkaController;
