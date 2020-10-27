import React, { Component } from 'react';
import DataSize from '../metrics/DataSize.jsx';

class ProducerMetrics extends Component {
  render() {
    return (
      <div>
        <h1>Producer Metrics</h1>
        <p>put stuff here</p>
        <DataSize />
      </div>
    );
  }
}

export default ProducerMetrics;
