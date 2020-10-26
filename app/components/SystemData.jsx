import React, { Component } from 'react';
import StopLight from './metrics/StopLight';
import Graph from './metrics/Graph';
import { Bar } from 'react-chartjs-2';

class SystemData extends Component {
  // state should probably go in this component
  render() {
    // const avg =
    //   Math.round(
    //     (this.props.data.sum / this.props.data.numOfDataPoints) * 100
    //   ) / 100; // Round to 2 decimals
    const { title } = this.props;
    const { sum, numOfDataPoints, smallest, largest } = this.props.data;
    const avg =
      sum === 0 && numOfDataPoints === 0
        ? 'None'
        : (sum / numOfDataPoints).toFixed(2);

    const chartData = {
      labels: [title],
      datasets: [
        {
          backgroundColor: ['rgb(0, 195, 255)'],
          borderWidth: 2,
          borderColor: 'rgb(36, 36, 36)',
          data: [avg],
        },
      ],
    };

    const fontSize = 30;
    const fontColor = 'rgb(36, 36, 36)';
    const fontFamily = 'Lato';
    const chartOptions = {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            ticks: {
              fontSize,
              fontColor,
              fontFamily,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              fontSize,
              fontColor,
              fontFamily,
            },
          },
        ],
      },
    };

    return (
      <div className="system-data">
        <h2 className="metric-title">{title}</h2>
        <p className="metrics">Average: {avg}</p>
        <p className="metrics">
          Smallest: {smallest === Number.POSITIVE_INFINITY ? 'None' : smallest}
        </p>
        <p className="metrics">
          Largest: {largest === Number.NEGATIVE_INFINITY ? 'None' : largest}
        </p>

        {/* Chart */}
        <div className="chart">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    );
  }
}

export default SystemData;
