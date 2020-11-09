import React, { Component } from 'react';
import logo from '../icons/kafkaQ-logo.png';

class Home extends Component<{}> {
  render(): JSX.Element {
    return (
      <div className="home">
        {/* <img src={logo} height="425" width="475" className="main-logo" /> */}
        <img src={logo} className="main-logo" />
        <p className="title">
          kafkaQ is an open source monitoring tool for your Kafka application
        </p>
      </div>
    );
  }
}

export default Home;
