// rcc tab to show react boilerplate
import React, { Component } from 'react';

class Docs extends Component {
  render() {
    return (
      <div className="box">
        <h2 className="box-background title">Install npm Package</h2>
        <p className="box-background">
          <code className="box-background code">
            npm install kafkaq-monitor
          </code>
        </p>
        <h2 className="box-background title">Getting Start</h2>
        <h3 className="box-background title">Producer</h3>
        <p className="box-background">
          To monitor performance data from your Kafka producer, import
          trackProducer to your producer module.
        </p>
        <p className="box-background">
          <code className="box-background code">
            <span class="token keywords">const</span>
            <span class="token symbols"> {'{'} </span>
            <span class="token names"> trackProducer </span>
            <span class="token symbols"> {'}'} </span>
            <span class="token equation"> = </span>
            <span class="token keywordReq"> require </span>
            <span class="token symbols">(</span>
            <span class="token symbols">'</span>
            <span class="token string">../../kafkaq-monitor/index.js</span>
            <span class="token symbols">'</span>
            <span class="token symbols">)</span>
            <span class="token symbols">;</span>
          </code>
        </p>
        <p className="box-background">
          Then, invoke trackProducer with your producer as the argument after
          your producer is connected.
          <p />
          <p className="box-background"></p>
          <code className="box-background code">
            <span class="token func"> trackProducer</span>
            <span class="token symbols">(</span>
            <span class="token names">producer</span>
            <span class="token symbols">)</span>
            <span class="token symbols">;</span>
          </code>
        </p>
        <h3 className="box-background title">Consumer</h3>
        <p className="box-background">
          To monitor performance data from your Kafka consumer, import
          trackConsumer to your consumer module.
        </p>
        <p className="box-background">
          <code className="box-background code">
            <span class="token keywords">const</span>
            <span class="token symbols"> {'{'} </span>
            <span class="token names"> trackConsumer </span>
            <span class="token symbols"> {'}'} </span>
            <span class="token equation"> = </span>
            <span class="token keywordReq"> require </span>
            <span class="token symbols">(</span>
            <span class="token symbols">'</span>
            <span class="token string">../../kafkaq-monitor/index.js</span>
            <span class="token symbols">'</span>
            <span class="token symbols">)</span>
            <span class="token symbols">;</span>
          </code>
        </p>
        <p className="box-background">
          Then, invoke trackConsumer with your consumer as the argument after
          your consumer is connected.
        </p>
        <p className="box-background">
          <code className="box-background code">
            <span class="token func"> trackConsumer</span>
            <span class="token symbols">(</span>
            <span class="token names">consumer</span>
            <span class="token symbols">)</span>
            <span class="token symbols">;</span>
          </code>
        </p>
        <h2 className="box-background">Testing</h2>
        <p className="box-background">
          run docker, zookeeper, start kafka cluster, and run test app
        </p>
      </div >
    );
  }
}

export default Docs;