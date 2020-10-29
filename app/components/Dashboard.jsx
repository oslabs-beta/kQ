import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

import ProducerMetrics from './containers/ProducerMetrics.jsx';
import ConsumerMetrics from './containers/ConsumerMetrics.jsx';

const mapStateToProps = (state) => ({
  // Producer state
  producerDataSize: state.producer.dataSize,
  producerProcessingTimeInMilliseconds:
    state.producer.processingTimeInMilliseconds,
  producerPendingDuration: state.producer.pendingDuration,
  // Consumer state
  consumerDataSize: state.consumer.dataSize,
  consumerProcessingTimeInMilliseconds:
    state.consumer.processingTimeInMilliseconds,
  consumerPendingDuration: state.consumer.pendingDuration,
});

const mapDispatchToProps = (dispatch) => ({
  addProducerData: (newData) => dispatch(actions.addProducerData(newData)),
  addConsumerData: (newData) => dispatch(actions.addConsumerData(newData)),
});

class Dashboard extends Component {
  // As soon as this component loads, establish a Web Socket connection to our server
  componentDidMount() {
    const socket = io.connect('http://localhost:5000');

    // Socket event to handle updates to producer metrics
    socket.on('producer', (data) => this.props.addProducerData(data));

    // Socket event to handle updates to consumer metrics
    socket.on('consumer', (data) => this.props.addConsumerData(data));
  }

  render() {
    const {
      producerDataSize,
      producerProcessingTimeInMilliseconds,
      producerPendingDuration,
      consumerDataSize,
      consumerProcessingTimeInMilliseconds,
      consumerPendingDuration,
    } = this.props;

    return (
      <div className="dashboard">
        <ProducerMetrics
          dataSize={producerDataSize}
          processingTime={producerProcessingTimeInMilliseconds}
          pendingDuration={producerPendingDuration}
        />
        <ConsumerMetrics
          dataSize={consumerDataSize}
          processingTime={consumerProcessingTimeInMilliseconds}
          pendingDuration={consumerPendingDuration}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
