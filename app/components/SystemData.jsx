import React, { Component } from 'react';
import StopLight from './metrics/StopLight';
import Graph from './metrics/Graph';

class SystemData extends Component {
  // state should probably go in this component
  render() {
    return (
      <div className="system-data">
        <h2>This is the System Data Box:</h2>
        <StopLight />
        <Graph />
      </div>
    );
  }
}

export default SystemData;