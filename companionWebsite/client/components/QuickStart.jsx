import React, { Component } from 'react';

class QuickStart extends Component {
  render() {
    return (
      <div className="box">
        <h1 className="box-background title">Installation</h1>
        <p className="box-background">
          kafkaQ is incredibly easy to incorporate into your application. Let's
          walk through the steps you'll need to take.
        </p>
        <ol className="box-background">
          <li className="box-background">
            In your project's root directory, run
            <code className="box-background code">
              {' '}
              npm install kafkaq-monitor
            </code>
          </li>
          <li className="box-background">
            In the producer script of your Kafka application, import our
            <code className="box-background code"> trackProducer </code> method
            and invoke it immediately after the code connecting your producer,
            passing in your producer as an argument. Here's an example:
            <br />
            <code className="box-background code-block">
              {/* Restart the code part. use span tags to get diff colors */}
              {"const { Kafka } = require('kafkajs');\n"}
              {''}
              <br />
              {/* const { Kafka } = require('kafkajs');
              const { trackProducer } = require('kafkaq-monitor'); // kafkaQ's NPM package

              const kafka = new Kafka({
                clientId: 'myapp',
                brokers: [`${process.env.LOCAL_COMPUTER}:9092`],
              });

              const producer = kafka.producer();
              await producer.connect();

              trackProducer(producer); // Invoke kafkaQ's trackProducer method with your producer as the argument */}
              {/* const result = await producer.send(
                topic: 'Users',
                messages: [
                  {
                    value: 'test',
                    partition: 0,
                  },
                ],
              ); */}
              const result = await producer.send{'()'} await
              producer.disconnect();
            </code>
          </li>
        </ol>
      </div>
    );
  }
}

export default QuickStart;
