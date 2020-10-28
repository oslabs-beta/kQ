import React, { Component } from 'react';
import Metric from '../templates/Metric.jsx';

class DataSize extends Metric {
  render() {
    const title = 'Data Size';

    const labels = ['Average', 'Smallest', 'Largest'];
    const nums = [15, 10, 20];

    const chartData = this.generateChartData(title, nums[0]);
    const chartOptions = this.generateChartOptions();

    return (
      <div className="system-data">
        {this.generateTitle(title)}
        {labels.map((label, idx) => this.generateLabel(label, nums[idx]))}
        {this.generateChart(chartData, chartOptions)}
      </div>
    );
  }
}

export default DataSize;
