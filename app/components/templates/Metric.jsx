import React, { Component } from 'react';

/*

This class designs a "template" for our metrics. It contains basic methods to render JSX code
that can be used by the various metrics components we have. Here are all the methods we have written:

-Method to calculate avg
-Method to create chartData (params: title, avg) object
-Method to create chartOptions object
-Method to create a title
-Method to create a label (these are things like avg, smallest, largest)
-Method to create a graph
*/

const backgroundColor = 'rgb(0, 195, 255)';
const borderWidth = 2;
const borderColor = 'rgb(36, 36, 36)';

const fontSize = 30;
const fontColor = 'rgb(36, 36, 36)';
const fontFamily = 'Lato';

class Metric extends Component {
  // Calculate avg given sum and number of data points
  // Note: this method will return 'None' if both arguments are 0
  calculateAvg(sum, numOfDataPoints) {
    return sum === 0 && numOfDataPoints === 0
      ? 'None'
      : (sum / numOfDataPoints).toFixed(2);
  }

  // Create chart data object which will be used to instantiate Chart object. This contains numbers
  // to be used in the graph, along with some of the stlying like backgroundColor
  generateChartData(title, avg) {
    const processedAvg = avg === 'None' ? 0 : avg;

    return {
      labels: [title],
      datasets: [
        {
          backgroundColor: [backgroundColor],
          borderWidth,
          borderColor,
          data: [processedAvg],
        },
      ],
    };
  }

  // Create chart title h2 tag
  generateTitle(title) {
    return <h2 className="metric-title">{title}</h2>;
  }

  // Create a graph given chartData and chartOptions objects which define specs of our graph
  generateGraph(chartData, chartOptions) {
    return (
      <div className="chart">
        <Bar data={chartData} options={chartOptions} />
      </div>
    );
  }

  // Create a label within a specific metric
  generateLabel(label, num) {
    const processedNum =
      num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY
        ? 'None'
        : num;

    return (
      <p className="metrics">
        {label}: {processedNum}
      </p>
    );
  }

  // Create chartOptions object which is used to customize the look of our chart
  generateChartOptions() {
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
  }
}

export default Metric;
