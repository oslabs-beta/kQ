import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Homepage from './Homepage';

/* eslint-disable */
class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="title">
          <h2>kafkaQ</h2>
          <h1>Dashboard</h1>
        </div>
        <div className="dashboard-container">
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
