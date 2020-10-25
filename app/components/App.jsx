import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Homepage from './Homepage';

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
          <h1>kafkaQ</h1>
        </div>
        <div className="dashboard-container">
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
