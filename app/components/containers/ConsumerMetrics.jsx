import React, { Component } from 'react';
import Metric from '../Metric.jsx';

// Electron App:
// Renders Metric components for: DATA SIZE, PROCESSING TIME, PENDING DURATION
class ConsumerMetrics extends Component {
  render() {
    const { dataSize, processingTime, pendingDuration } = this.props;

    return (
      <div className="dashboard">
        <h1 className="metric-heading">Consumer Metrics</h1>
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

export default ConsumerMetrics;
