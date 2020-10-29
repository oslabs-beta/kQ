import React, { Component } from 'react';
import MetricTemplate from '../MetricTemplate.jsx';

class Metric extends MetricTemplate {
  render() {
    const { title, data } = this.props;

    const { sum, numOfDataPoints, smallest, largest } = data;

    /*
    {
          sum: dataSize.sum + data.size,
          numOfDataPoints: dataSize.numOfDataPoints + 1,
          smallest: Math.min(dataSize.smallest, data.size),
          largest: Math.max(dataSize.largest, data.size),
    }
    */

    const labels = ['Average', 'Smallest', 'Largest'];

    const processedData = [
      this.calculateAvg(sum, numOfDataPoints),
      smallest,
      largest,
    ];

    const chartData = this.generateChartData(title, processedData[0]);
    const chartOptions = this.generateChartOptions();

    return (
      <div className="system-data">
        {this.generateTitle(title)}
        {labels.map((label, idx) =>
          this.generateLabel(label, processedData[idx])
        )}
        {this.generateChart(chartData, chartOptions)}
      </div>
    );
  }
}

export default Metric;
