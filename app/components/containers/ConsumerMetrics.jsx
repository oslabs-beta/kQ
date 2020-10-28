import React, { Component } from 'react';
import Producer from '../metrics/Producer.jsx';

class ConsumerMetrics extends Component {
  render() {
    const { dataSize, processingTime, pendingDuration } = this.props;

    return (
      <div className="dashboard">
        <h1 className="metric-heading">Consumer Metrics</h1>
        <div className="metrics-container">
          <Producer title={'Data Size'} data={dataSize} />
          <Producer title={'Processing Time'} data={processingTime} />
          <Producer title={'Pending Duration'} data={pendingDuration} />
        </div>
        {/* <DataSize />
        <ProcessingTime /> */}
      </div>
    );
  }
}

export default ConsumerMetrics;
