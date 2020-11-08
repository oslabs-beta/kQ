import React, { Component } from 'react';
import Metric from '../Metric.jsx';
import { Container, Col, Row } from 'react-bootstrap';

// Electron App:
// Renders consumer Metric components for data size, processing time, pending durationion
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
      </div>
    );
  }
}

export default ConsumerMetrics;
