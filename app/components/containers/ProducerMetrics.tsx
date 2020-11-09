import React, { Component } from 'react';

import Metric from '../Metric';

interface DataPoints {
  sum: number;
  numOfDataPoints: number;
  smallest: number;
  largest: number;
}

interface ProducerMetricsProps {
  dataSize: DataPoints;
  processingTime: DataPoints;
  pendingDuration: DataPoints;
}

// Electron App:
// Renders producer Metric components for data size, processing time, pending duration
class ProducerMetrics extends Component<ProducerMetricsProps> {
  render(): JSX.Element {
    const { dataSize, processingTime, pendingDuration } = this.props;

    return (
      <div className="dashboard">
        <div className="heading-content">
          <div className="header">
            <h1 className="metric-heading">Producer Metrics</h1>
          </div>
          <div className="metrics-container">
            <Metric title={'Data Size'} data={dataSize} />
            <Metric title={'Processing Time'} data={processingTime} />
            <Metric title={'Pending Duration'} data={pendingDuration} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProducerMetrics;
