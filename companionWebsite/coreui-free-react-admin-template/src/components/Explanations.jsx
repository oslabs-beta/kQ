import React, { Component } from 'react';

class Explanations extends Component {
  render() {
    return (
      <div>
        <h1>Explanations</h1>
        <h2>Overview</h2>
        <p>
          kafkaQ's UI offers an simple, yet clean way for you to monitor your
          application. Our analytics are broken down into 2 categories:
          <strong> producer</strong> and <strong>consumer</strong>. Within each
          of these categories we track a variety of metrics. In order to make
          thorough conclusions about your system's performance, we break down
          each metric and show you what the average request, the smallest
          request, and the largest request look like. Additionally, we provide a
          dynamic bar chart that is update in real-time as data flows through
          your system. With our application, you can identify the cause behind
          latency, enabling a swift response whether that means increasing the
          quantity of brokers or modifying your system architecture. In this
          way, kafkaQ works to ensure that your users will have a seamless
          experience with your application.
        </p>
        <h2>Producer Metrics</h2>
        <p>
          For your producers, we will track the following:
          <strong> data size</strong>, <strong>processing time</strong>, and
          <strong> pending duration</strong>. Data size shows the quantity of
          data that is being sent through your Kafka systems by various
          producers. We display the size of data sent through your in MB.
        </p>
        <h2>Consumer Metrics</h2>
      </div>
    );
  }
}

export default Explanations;
