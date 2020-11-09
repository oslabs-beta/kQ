import React, { Component } from 'react';
import Metric from '../Metric';

interface DataPoints {
  sum: number;
  numOfDataPoints: number;
  smallest: number;
  largest: number;
}

interface ConsumerMetricsProps {
  dataSize: DataPoints;
  processingTime: DataPoints;
  pendingDuration: DataPoints;
}

// Electron App:
// Renders consumer Metric components for data size, processing time, pending durationion
class ConsumerMetrics extends Component<ConsumerMetricsProps> {
  render(): JSX.Element {
    const { dataSize, processingTime, pendingDuration } = this.props;

    return (
      <div className="dashboard">
        <div className="heading-content">
          <div className="header">
            <h1 className="metric-heading">Consumer Metrics</h1>
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

export default ConsumerMetrics;
