import React, { Component } from 'react';
import logo from '../icons/kafkaQ-logo.png';

class Home extends Component<{}> {
  render(): JSX.Element {
    return (
      <div className="home">
        {/* <div>
          <a href="https://github.com/oslabs-beta/kafkaQ.git">GitHub Page </a>
          <br />
          <a href="https://github.com/oslabs-beta/kafkaQ.git">npm Page </a>
          <br />
          <a href="https://github.com/oslabs-beta/kafkaQ.git">Medium Page</a>
        </div>
        <p>kafkaQ is a open source Kafka performance monitoring tool</p>
        <h2>Demo</h2>
        <p>Demo gifs</p>
        <img
          src="https://zdnet4.cbsistatic.com/hub/i/r/2018/07/13/93218cd5-cfd9-4b10-bd28-1cc71a7275bc/resize/1200x900/f95fe9cbeb1880feb8c72938ea27de81/kafka-logo.png"
          width="600"
          height="450"
        ></img> */}
        <img src={logo} height="425" width="475" />
        <p className="title">
          kafkaQ is an open source monitoring tool for your Kafka application
        </p>
      </div>
    );
  }
}

export default Home;
