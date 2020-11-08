import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

/*
This class designs a "template" for our metrics. It contains basic methods to render JSX code
that can be used by the various metrics components we have. Here are all the methods we have written:

-Calculate avg
-Create chartData (params: title, avg) object
-Create chartOptions object
-Create a title
-Create a label (these are things like avg, smallest, largest)
-Create a graph
*/

interface DataPoints {
  sum: number;
  numOfDataPoints: number;
  smallest: number;
  largest: number;
}

interface MetricProps {
  title: string;
  data: DataPoints;
}

const backgroundColor = 'rgb(83, 190, 243)';
// const backgroundColor = '#233441';
const borderWidth = 2;
const borderColor = 'rgb(83, 190, 243)';
// const borderColor = 'rgb(36, 171, 238)';
// const borderColor = '#216480';

const fontSize = 24;
const fontColor = '#d1d1d2';
const fontFamily = 'Lato';

class MetricTemplate extends Component<MetricProps> {
  // Calculate avg given sum and number of data points
  // Note: this method will return 'None' if both arguments are 0
  calculateAvg(sum: number, numOfDataPoints: number): any {
    return sum === 0 && numOfDataPoints === 0
      ? 'None'
      : (sum / numOfDataPoints).toFixed(2);
  }

  // Create chart title h2 tag
  generateTitle(title: string): JSX.Element {
    return <h2 className="metric-title">{title}</h2>;
  }

  // Create a label within a specific metric
  generateLabel(label: string, num: number): JSX.Element {
    const processedNum =
      num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY
        ? 'None'
        : num;

    return (
      <p className="metrics" key={`${label}-${processedNum}`}>
        {label}: {processedNum}
      </p>
    );
  }

  // Create chart data object which will be used to instantiate Chart object. This contains numbers
  // to be used in the graph, along with some of the stlying like backgroundColor
  generateChartData(title: string, avg: number | string): any {
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

  // Create chartOptions object which is used to customize the look of our chart
  generateChartOptions(): any {
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

  // Create a chart given chartData and chartOptions objects which define specs of our chart
  generateChart(chartData: any, chartOptions: any): JSX.Element {
    return (
      <div className="chart">
        <Bar data={chartData} options={chartOptions} />
      </div>
    );
  }
}

export default MetricTemplate;
