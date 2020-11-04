# kafkaQ

## Overview

- Monitor your Kafka application in real-time to find weaknesses and vulnerabilities
- Track key metrics like data size, processing time, and pending duration for producers and consumers
- Integrate kafkaQ with your application in a matter of minutes
- Compatible with the KafkaJS API for Node.js backends

kafkaQ is a central location where you can find important data about your Kafka application's performance. Our dashboard provides critical insight about your system's activity, allowing rapid diagnosis of vulnerabilities.

Informed by our statistics, you can determine the optimal approach to scale your Kafka architecture, whether it means adding more brokers or reconfiguring your zookeeper.

## Demo

Put some screenshots or gifs here

## Documentation

Link to our companion website

## Quick Start

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

3. We will now connect kafkaQ to your consumer. This will be very similar to the previous step. Import our `trackConsumer` method and invoke it after your consumer subscribes to a topic, passing your consumer as the argument. Here's an example:

```javascript
const { Kafka } = require('kafkajs');
const { trackConsumer } = require('kafkaq-monitor'); // kafkaQ's NPM package

const kafka = new Kafka({
  clientId: 'myapp',
  brokers: [`${process.env.LOCAL_COMPUTER}:9092`],
});
const consumer = kafka.consumer({
  groupId: 'test',
});

await consumer.connect();

await consumer.subscribe({
  topic: 'Users',
  fromBeginning: true,
});

trackConsumer(consumer); // Invoke kafkaQ's trackConsumer method with your consumer as the argument

await consumer.run({
  eachMessage: async (result) => {
    // Execute some code for each message
  },
});
```

You're done! In just 4 lines of code, you were able to integrate kafkaQ with your application for real-time tracking. In the next section, we'll see how to view your metrics.

## Viewing your metrics

To view your metrics, you will need to use the Electron app built in this repo. Follow these instructions.

1. Clone this repo (`git clone XXX`) and cd into it (`cd kafkaq`).
2. Start our server with `npm run app-server CHANGE THIS****`. This allows kafkaQ to send its metrics to our the Electron UI.
3. Finally, open the Electron app with `yarn start`.

** steps 2 and 3 should be combined into 1 command for the users.
** also figure out if they should use npm or yarn please

You're all set! You should be able to track analytics as data moves through your Kafka application, and make vital decisions about scaling your distributed system.

## See kafkaQ in action using our Kafka application simulator

If you haven't yet set up your Kafka application, but you want to see how kafkaQ works, we've got you covered. In this section, we'll show you how to set up our Kafka application simulator and track its metrics using kafkaQ.

1. Clone this repo (`git clone XXX`) and cd into it (`cd kafkaq`).

We're going to break this into 3 sections for clarify:

## Section I: Starting Kafka

We will be using Docker images to start Confluent Kafka, so start by installing Docker and creating an account.

1. Start my ensuring that Docker is running with `docker run hello-world`. You should see something similar to this:

ADD SCREENSHOT HERE

2. Now, we will start a KAFKA ZOOKEEPER INSTANCE (COME BACK TO THIS TO CHECK PRECISION).Run this command to start a zookeeper instance and expose it on port 2181: `docker run --name zookeeper -p 2181:2181 zookeeper`

3. For our next step, you will need to copy your computer's reference on your local network. On a Mac, you can find this by going to Systems Preferences > Sharing. Under the section "Computer Name", you should be able to find it. See the example below:

ADD SCREENSHOT HERE

4. Now that you have your local computer's reference, you're ready to start Kafka. Make sure to replace [LOCAL_COMPUTER] with this reference (note that you should NOT include the square brackets). Run the following command: `docker run --name kafka -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=[LOCAL_COMPUTER]:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://[LOCAL_COMPUTER]:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka`

This is all you need to do to start Kafka! Make sure to safe your local computer's reference as we will use that in future sections.

### Section II: Set up the Kafka application simulator

1. Cd into the kafkaApplicationSimulator directory (`cd kafkaApplicationSimulator`)
2.

### Section III: Viewing your metrics

## FAQ/Debugging suggestions/Common mistakes

Not done
