import React, { Component } from 'react';
import StopLight from './metrics/StopLight';
import Graph from './metrics/Graph';

class SystemData extends Component {
  // state should probably go in this component
  render() {
    return (
      <div className="app">
        <h2>THIS IS THE DASHBOARD:</h2>
        <StopLight />
      </div>
    );
  }
}

export default SystemData;
