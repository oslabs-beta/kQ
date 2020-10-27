import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Homepage from './Homepage';
import Icon from './assets/kafkaq_logoTest.svg';
// import logo from './assets/kafkaq_logoTest.svg';

/* eslint-disable */
// const api = {
//   key: '9cf4213d3cc82809c8344f68d1ea107f',
//   base: 'https://api.openweathermap.org/data/2.5/'
// };

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="title">
          {/* <img height={25} src={logo} alt="logo" /> */}
          <h2>kafkaQ</h2>
          <h1>Dashboard</h1>
        </div>
        <div className="dashboard-container">
          <Dashboard />
          <Icon width={50} height={50} />
        </div>
      </div>
    );
  }
}

export default App;
