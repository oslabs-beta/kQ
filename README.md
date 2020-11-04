# kafkaQ

## Overview

- Monitor your Kafka application in real-time to find weaknesses and vulnerabilities
- Track key metrics like data size, processing time, and pending duration for producers and consumers
- Integrate kafkaQ with your application in a matter of minutes
- Compatible with the KafkaJS API for Node.js backends

kafkaQ is a central location where you can find important data about your Kafka application's performance. Our dashboard provides critical insight about your system's activity, allowing rapid diagnosis of vulnerabilities.

Informed by our statistics, you can determine the optimal approach to scale your Kafka architecture, whether it means adding more brokers or reconfiguring your zookeeper.

## Quick start

kafkaQ is incredibly easy to incorporate into your application. Let's walk through the steps you'll need to take.

1. In your project's root directory, run `npm install kafkaq-monitor`
2. In the producer script of your Kafka application, import our `trackProducer` method and invoke it immediately after the code connecting your producer, passing in your producer as an argument. Here's an example:

```javascript
const { Kafka } = require('kafkajs');
const { trackProducer } = require('kafkaq-monitor'); // kafkaQ's NPM package

const kafka = new Kafka({
  clientId: 'myapp',
  brokers: [`${process.env.LOCAL_COMPUTER}:9092`],
});

const producer = kafka.producer();
await producer.connect();

trackProducer(producer); // Invoke kafkaQ's trackProducer method with your producer as the argument

const result = await producer.send({
  topic: 'Users',
  messages: [
    {
      value: 'test',
      partition: 0,
    },
  ],
});

await producer.disconnect();
```

3. We will now connect kafkaQ to your consumer. This will be very similar to the previous step. Import our `trackConsumer` method and invoke it after connecting your consumer, passing your consumer as the argument. Here's an example:

```javascript
const { Kafka } = require('kafkajs');
const { trackConsumer } = require('kafkaq-monitor');

const kafka = new Kafka({
  clientId: 'myapp',
  brokers: [`${process.env.LOCAL_COMPUTER}:9092`],
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

trackConsumer(consumer);

await consumer.run({
  eachMessage: async (result) => {
    console.log(`MSG: ${result.message.value} PARTITION: ${result.partition}`);
  },
});
```
