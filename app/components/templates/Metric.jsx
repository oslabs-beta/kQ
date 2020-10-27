import React, { Component } from 'react';

/*

/-Method to calculate avg
const avg =
      sum === 0 && numOfDataPoints === 0
        ? 'None'
        : (sum / numOfDataPoints).toFixed(2);

/-Method to create chartData (params: title, avg) object

/-Method to create chartOptions object

/-Method to create a title

/-Method to create a label (these are things like avg, smallest, largest)

/-Method to create a graph

add comments to methods

*/
// Metric class does...
class Metric extends Component {
  constructor() {
    this.backgroundColor = 'rgb(0, 195, 255)';
    this.borderWidth = 2;
    this.borderColor = 'rgb(36, 36, 36)';
    this.fontSize = 30;
    this.fontColor = 'rgb(36, 36, 36)';
    this.fontFamily = 'Lato';
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
  // Create chart data
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
  // Create chart title
  generateTitle(title) {
    return <h2 className="metric-title">{title}</h2>
  }

  // Create a graph
  generateGraph(chartData, chartOptions){
    return (<div className="chart">
            <Bar data={chartData} options={chartOptions} />
          </div>
    )
  }

  // Create a label for items: avg, smallest, largest
  generateLabes(avg, smallest, largest){
    return (
        <p className="metrics">Average: {avg}</p>
        <p className="metrics">
          Smallest: {smallest === Number.POSITIVE_INFINITY ? 'None' : smallest}
        </p>
        <p className="metrics">
          Largest: {largest === Number.NEGATIVE_INFINITY ? 'None' : largest}
        </p>
    )
  }

  // Create chartOptions object
  generateChartOptions(){
    // const fontSize = 30;
    // const fontColor = 'rgb(36, 36, 36)';
    // const fontFamily = 'Lato';
    return {
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
              this.fontSize,
              this.fontColor,
              thisfontFamily,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              this.fontSize,
              this.fontColor,
              this.fontFamily,
            },
          },
        ],
      },
    };
  }

  render() {
    return <p>hi</p>;
  }
}

export default Metric;
