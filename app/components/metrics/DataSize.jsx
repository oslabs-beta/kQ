import React, { Component } from 'react';
import Metric from '../templates/Metric.jsx';

class DataSize extends Metric {
  render() {
    return (
      <div>
        <p>hello</p>
        <p>hi</p>
        {this.generateTitle('Jonathan')}
      </div>
    );
  }
}

export default DataSize;
