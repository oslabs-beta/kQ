import React, { Component } from 'react';
import ProducerMetrics from './containers/ProducerMetrics.jsx';
import ConsumerMetrics from './containers/ConsumerMetrics.jsx';
import AdminMetrics from './containers/AdminMetrics.jsx';
import SystemData from './SystemData.jsx';
/* eslint-disable */

// const api = {
//   key: '9cf4213d3cc82809c8344f68d1ea107f',
//   base: 'https://api.openweathermap.org/data/2.5/',
// };

class Dashboard extends Component {
  // state should probably go in this component
  constructor(props) {
    super(props);

    this.state = {};

    this.state.producer = {
      dataSize: {
        sum: 0,
        numOfDataPoints: 0,
        smallest: Number.POSITIVE_INFINITY,
        largest: Number.NEGATIVE_INFINITY,
      },
      processingTimeInMilliseconds: {
        sum: 0,
        numOfDataPoints: 0,
        smallest: Number.POSITIVE_INFINITY,
        largest: Number.NEGATIVE_INFINITY,
      },
      pendingDuration: {
        sum: 0,
        numOfDataPoints: 0,
        smallest: Number.POSITIVE_INFINITY,
        largest: Number.NEGATIVE_INFINITY,
      },
    };
    this.state.consumer = {
      dataSize: {
        sum: 0,
        numOfDataPoints: 0,
        smallest: Number.POSITIVE_INFINITY,
        largest: Number.NEGATIVE_INFINITY,
      },
      processingTimeInMilliseconds: {
        sum: 0,
        numOfDataPoints: 0,
        smallest: Number.POSITIVE_INFINITY,
        largest: Number.NEGATIVE_INFINITY,
      },
      pendingDuration: {
        sum: 0,
        numOfDataPoints: 0,
        smallest: Number.POSITIVE_INFINITY,
        largest: Number.NEGATIVE_INFINITY,
      },
    };
    this.clickMe = this.clickMe.bind(this);
  }

  // componentDidMount() {
  //   this.fetchData();
  // }

  // this is the average

  componentDidMount() {
    const socket = io.connect('http://localhost:5000');
    console.log('cnct');

    // socket for the producer
    socket.on('data', (data) => {
      const {
        dataSize,
        pendingDuration,
        processingTimeInMilliseconds,
      } = this.state.producer;

      const producerData = {
        dataSize: {
          sum: dataSize.sum + data.size,
          numOfDataPoints: dataSize.numOfDataPoints + 1,
          smallest: Math.min(dataSize.smallest, data.size),
          largest: Math.max(dataSize.largest, data.size),
        },
        processingTimeInMilliseconds: {
          sum:
            processingTimeInMilliseconds.sum +
            data.processingTimeInMilliseconds,
          numOfDataPoints: processingTimeInMilliseconds.numOfDataPoints + 1,
          smallest: Math.min(
            processingTimeInMilliseconds.smallest,
            data.processingTimeInMilliseconds
          ),
          largest: Math.max(
            processingTimeInMilliseconds.largest,
            data.processingTimeInMilliseconds
          ),
        },
        pendingDuration: {
          sum: pendingDuration.sum + data.pendingDuration,
          numOfDataPoints: pendingDuration.numOfDataPoints + 1,
          smallest: Math.min(
            pendingDuration.smallest,

            data.pendingDuration
          ),
          largest: Math.max(
            pendingDuration.largest,

            data.pendingDuration
          ),
        },
      };

      this.setState({
        ...this.state,
        producer: producerData,
        //consumer: consumerData
      });
    });

    // socket for the consumer
    socket.on('consumer', (data) => {
      const {
        dataSize,
        pendingDuration,
        processingTimeInMilliseconds,
      } = this.state.consumer;

      const consumerData = {
        dataSize: {
          sum: dataSize.sum + data.size,
          numOfDataPoints: dataSize.numOfDataPoints + 1,
          smallest: Math.min(dataSize.smallest, data.size),
          largest: Math.max(dataSize.largest, data.size),
        },
        processingTimeInMilliseconds: {
          sum:
            processingTimeInMilliseconds.sum +
            data.processingTimeInMilliseconds,
          numOfDataPoints: processingTimeInMilliseconds.numOfDataPoints + 1,
          smallest: Math.min(
            processingTimeInMilliseconds.smallest,
            data.processingTimeInMilliseconds
          ),
          largest: Math.max(
            processingTimeInMilliseconds.largest,
            data.processingTimeInMilliseconds
          ),
        },
        pendingDuration: {
          sum: pendingDuration.sum + data.pendingDuration,
          numOfDataPoints: pendingDuration.numOfDataPoints + 1,
          smallest: Math.min(
            pendingDuration.smallest,

            data.pendingDuration
          ),
          largest: Math.max(
            pendingDuration.largest,

            data.pendingDuration
          ),
        },
      };

      this.setState({
        ...this.state,
        consumer: consumerData,
      });
    });

    // socket.emit('message', {
    //   msg: 'hi',
    // });
  }

  clickMe(e) {
    alert('button clicked');
  }

  // fetchData() {
  //   if (evt.key === 'Enter') {
  //     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setWeather(result);
  //         setQuery('');
  //       })
  //       .catch((error) => console.log('fetch request failed', error));
  //   }
  // }

  render() {
    console.log('dashbd state', this.state);
    const {
      dataSize,
      processingTimeInMilliseconds,
      pendingDuration,
    } = this.state.producer;
    // console.log('dashboard p time', processingTime);

    return (
      <div className="dashboard">
        <ProducerMetrics
          dataSize={dataSize}
          processingTime={processingTimeInMilliseconds}
          pendingDuration={pendingDuration}
        />
        {/* <ConsumerMetrics
          dataSize={this.state.consumer.dataSize}
          processingTime={this.state.consumer.processingTimeInMilliseconds}
          pendingDuration={this.state.consumer.pendingDuration}
        /> */}
        <ConsumerMetrics
          dataSize={dataSize}
          processingTime={processingTimeInMilliseconds}
          pendingDuration={pendingDuration}
        />
        {/* <AdminMetrics /> */}
      </div>
    );
  }
}

export default Dashboard;
