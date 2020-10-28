import React, { Component } from 'react';
import Metric from '../templates/Metric.jsx';

const labels = ['Average', 'Smallest', 'Largest'];

class DataSize extends Metric {
  render() {
    return (
      <div>
        {this.generateTitle('Data Size')}
        {this.generateLabel(labels[0], 15)}
        {this.generateLabel(labels[1], 10)}
        {this.generateLabel(labels[2], 20)}
      </div>
    );
  }
}

export default DataSize;
