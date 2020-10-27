import React, { Component } from 'react';

/*

/-Method to calculate avg
const avg =
      sum === 0 && numOfDataPoints === 0
        ? 'None'
        : (sum / numOfDataPoints).toFixed(2);

/-Method to create chartData (params: title, avg) object

-Method to create chartOptions object

/-Method to create a title

-Method to create a label (these are things like avg, smallest, largest)

-Method to create a graph

add comments to methods

*/

class Metric extends Component {
  constructor() {
    this.backgroundColor = 'rgb(0, 195, 255)';
    this.borderWidth = 2;
    this.borderColor = 'rgb(36, 36, 36)';
  }

  // Calculate avg given sum and number of data points
  // Note: this method will return 'None' if both arguments are 0
  calculateAvg(sum, numOfDataPoints) {
    return (
      sum === 0 && numOfDataPoints === 0
        ? 'None'
        : (sum / numOfDataPoints).toFixed(2);
    )
  }

  generateChartData(title, avg) {
    return {
      labels: [title],
      datasets: [
        {
          backgroundColor: [this.backgroundColor],
          borderWidth: this.borderWidth,
          borderColor: this.borderColor,
          data: [avg],
        },
      ],
    };
  }

  generateTitle(title) {
    return <h2 className="metric-title">{title}</h2>
  }

  render() {
    return <p>hi</p>;
  }
}

export default Metric;
