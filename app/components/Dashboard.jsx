import React, { Component } from 'react';
import SystemData from './SystemData';

class Dashboard extends Component {
  // state should probably go in this component
  render() {
    return (
      <div className="app">
        <h2>THIS IS THE DASHBOARD:</h2>
        <SystemData />
      </div>
    );
  }
}

export default Dashboard;
