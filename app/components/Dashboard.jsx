import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

import ProducerMetrics from './containers/ProducerMetrics.jsx';
import ConsumerMetrics from './containers/ConsumerMetrics.jsx';
/* eslint-disable */

const mapStateToProps = (state) => ({
  producerDataSize: state.producer.dataSize,
  producerProcessingTimeInMilliseconds:
    state.producer.processingTimeInMilliseconds,
  producerPendingDuration: state.producer.pendingDuration,
});

const mapDispatchToProps = (dispatch) => ({
  addNewData: (newData) => dispatch(actions.addNewData(newData)),
});

class Dashboard extends Component {
  // state should probably go in this component
  constructor(props) {
    super(props);

    this.state = {};

    // this.state.producer = {
    //   dataSize: {
    //     sum: 0,
    //     numOfDataPoints: 0,
    //     smallest: Number.POSITIVE_INFINITY,
    //     largest: Number.NEGATIVE_INFINITY,
    //   },
    //   processingTimeInMilliseconds: {
    //     sum: 0,
    //     numOfDataPoints: 0,
    //     smallest: Number.POSITIVE_INFINITY,
    //     largest: Number.NEGATIVE_INFINITY,
    //   },
    //   pendingDuration: {
    //     sum: 0,
    //     numOfDataPoints: 0,
    //     smallest: Number.POSITIVE_INFINITY,
    //     largest: Number.NEGATIVE_INFINITY,
    //   },
    // };
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
  }

  componentDidMount() {
    const socket = io.connect('http://localhost:5000');

    // socket for the producer
    socket.on('producer', (data) => {
      this.props.addNewData(data);
      // const {
      //   dataSize,
      //   pendingDuration,
      //   processingTimeInMilliseconds,
      // } = this.state.producer;

      // const producerData = {
      //   dataSize: {
      //     sum: dataSize.sum + data.size,
      //     numOfDataPoints: dataSize.numOfDataPoints + 1,
      //     smallest: Math.min(dataSize.smallest, data.size),
      //     largest: Math.max(dataSize.largest, data.size),
      //   },
      //   processingTimeInMilliseconds: {
      //     sum:
      //       processingTimeInMilliseconds.sum +
      //       data.processingTimeInMilliseconds,
      //     numOfDataPoints: processingTimeInMilliseconds.numOfDataPoints + 1,
      //     smallest: Math.min(
      //       processingTimeInMilliseconds.smallest,
      //       data.processingTimeInMilliseconds
      //     ),
      //     largest: Math.max(
      //       processingTimeInMilliseconds.largest,
      //       data.processingTimeInMilliseconds
      //     ),
      //   },
      //   pendingDuration: {
      //     sum: pendingDuration.sum + data.pendingDuration,
      //     numOfDataPoints: pendingDuration.numOfDataPoints + 1,
      //     smallest: Math.min(
      //       pendingDuration.smallest,

      //       data.pendingDuration
      //     ),
      //     largest: Math.max(
      //       pendingDuration.largest,

      //       data.pendingDuration
      //     ),
      //   },
      // };

      // this.setState({
      //   ...this.state,
      //   producer: producerData,
      //   //consumer: consumerData
      // });
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
  }

  render() {
    const {
      producerDataSize,
      producerProcessingTimeInMilliseconds,
      producerPendingDuration,
    } = this.props;

    return (
      <div className="dashboard">
        <ProducerMetrics
          dataSize={producerDataSize}
          processingTime={producerProcessingTimeInMilliseconds}
          pendingDuration={producerPendingDuration}
        />
        <ConsumerMetrics
          dataSize={this.state.consumer.dataSize}
          processingTime={this.state.consumer.processingTimeInMilliseconds}
          pendingDuration={this.state.consumer.pendingDuration}
        />
        {/* <ConsumerMetrics
          dataSize={dataSize}
          processingTime={processingTimeInMilliseconds}
          pendingDuration={pendingDuration}
        /> */}
        {/* <AdminMetrics /> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
