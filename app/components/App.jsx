import React, { Component } from 'react';
import Dashboard from './Dashboard';

const api = {
  key: '9cf4213d3cc82809c8344f68d1ea107f',
  base: 'https://api.openweathermap.org/data/2.5/',
};

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>kafkaQ</h1>
        <h2>A New Monitoring System</h2>
        <Dashboard />
      </div>
    );
  }
}

export default App;
