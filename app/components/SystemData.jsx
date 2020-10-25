import React, { Component } from 'react';
import StopLight from './metrics/StopLight';
import Graph from './metrics/Graph';

class SystemData extends Component {
  // state should probably go in this component
  render() {
    // const avg =
    //   Math.round(
    //     (this.props.data.sum / this.props.data.numOfDataPoints) * 100
    //   ) / 100; // Round to 2 decimals
    const { title } = this.props;
    const { sum, numOfDataPoints, smallest, largest } = this.props.data;
    const avg = (sum / numOfDataPoints).toFixed(2);

    return (
      <div className="system-data">
        <h2>{title}:</h2>
        <h2>Average: {avg}</h2>
        <h2>Smallest: {smallest}</h2>
        <h2>Largest: {largest}</h2>
        {/* <StopLight />
        <Graph /> */}
      </div>
    );
  }
}

export default SystemData;
