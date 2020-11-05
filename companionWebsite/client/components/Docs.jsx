// rcc tab to show react boilerplate
import React, { Component } from 'react';

class Docs extends Component {
  render() {
    return (
      <div>
        <h2>Install npm Package</h2>
        <p>
          <code>npm install kafkaq-monitor</code>
        </p>
        <h2>Getting Start</h2>
        <h3>Producer</h3>
        <p>
          To monitor performance data from your Kafka producer, import
          trackProducer to your producer module.
        </p>
        <p>
          <code>
            const {'{'} trackProducer {'}'} =
            require('../../kafkaq-monitor/index.js')
          </code>
        </p>
        <p>
          Then, invoke trackProducer with your producer as the argument after
          your producer is connected.
        </p>
        <code>trackProducer(producer)</code>
        <h3>Consumer</h3>
        <p>
          To monitor performance data from your Kafka consumer, import
          trackConsumer to your consumer module.
        </p>
        <p>
          <code>
            const {'{'} trackConsumer {'}'} =
            require('../../kafkaq-monitor/index.js')
          </code>
        </p>
        <p>
          Then, invoke trackConsumer with your consumer as the argument after
          your consumer is connected.
        </p>
        <code>trackConsumer(consumer)</code>

        <h2>Testing</h2>
        <p>run docker, zookeeper, start kafka cluster, and run test app</p>
      </div>
    );
  }
}

export default Docs;
