import React, { Component } from 'react';

import Metric from '../Metric.jsx';
// import DataSize from '../metrics/producer/DataSize.jsx';
// import ProcessingTime from '../metrics/producer/ProcessingTime.jsx';

// Electron App:
// Renders producer METRIC components for: data size, processing time, pending duration
class ProducerMetrics extends Component {
  render() {
    const { dataSize, processingTime, pendingDuration } = this.props;

    return (
      <div className="dashboard">
        <h1 className="metric-heading">Producer Metrics</h1>
        <div className="metrics-container">
          <Metric title={'Data Size'} data={dataSize} />
          <Metric title={'Processing Time'} data={processingTime} />
          <Metric title={'Pending Duration'} data={pendingDuration} />
        </div>
        {/* <DataSize />
        <ProcessingTime /> */}
      </div>
    );
  }
}

export default ProducerMetrics;
