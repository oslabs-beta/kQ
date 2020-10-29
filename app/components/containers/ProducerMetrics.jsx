import React, { Component } from 'react';

import Producer from '../metrics/Producer.jsx';
// import DataSize from '../metrics/producer/DataSize.jsx';
// import ProcessingTime from '../metrics/producer/ProcessingTime.jsx';

class ProducerMetrics extends Component {
  render() {
    console.log('in prod metrics props', this.props);
    const { dataSize, processingTime, pendingDuration } = this.props;
    console.log('in prod metrics p time', processingTime);

    return (
      <div className="dashboard">
        <h1 className="metric-heading">Producer Metrics</h1>
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

export default ProducerMetrics;
