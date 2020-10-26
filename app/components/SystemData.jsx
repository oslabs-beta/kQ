import React, { Component } from 'react';
import StopLight from './metrics/StopLight';
import Graph from './metrics/Graph';
import { time } from 'console';

class SystemData extends Component {
  // state should probably go in this component
  render() {
             // const avg =
             //   Math.round(
             //     (this.props.data.sum / this.props.data.numOfDataPoints) * 100
             //   ) / 100; // Round to 2 decimals
             const { title } = this.props;
             // if title === 'data size' do the following:
             if (title === 'Data Size' || title === 'Processing Time') {
               const {
                 sum,
                 numOfDataPoints,
                 smallest,
                 largest,
                 name,
               } = this.props.data;
               const avg =
                 sum === 0 && numOfDataPoints === 0
                   ? 'None'
                   : (sum / numOfDataPoints).toFixed(2);

               return (
                 <div className="system-data">
                   <h2 className="metric-title">{title}</h2>
                   <p className="metrics">Average: {avg}</p>
                   <p className="metrics">
                     Smallest:{' '}
                     {smallest === Number.POSITIVE_INFINITY ? 'None' : smallest}
                   </p>
                   <p className="metrics">
                     Largest:{' '}
                     {largest === Number.NEGATIVE_INFINITY ? 'None' : largest}
                   </p>
                   {/* <StopLight />
            <Graph /> */}
                 </div>
               );
               //else if title === 'Api Name' do the following:
             } else if (title === 'Pending Duration') {
               const { time } = this.props.data;

               return (
                 <div className="system-data">
                   <h2 className="metric-title">{title}</h2>
                   <p className="metrics">Time: {time}</p>
                   {/* <p className="metrics">
              Smallest: {smallest === Number.POSITIVE_INFINITY ? 'None' : smallest}
            </p>
            <p className="metrics">
              Largest: {largest === Number.NEGATIVE_INFINITY ? 'None' : largest}
            </p> */}
                   {/* <StopLight />
            <Graph /> */}
                 </div>
               );
             }
           }
}

export default SystemData;
