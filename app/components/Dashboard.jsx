import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import ProducerMetrics from './containers/ProducerMetrics.jsx';
import ConsumerMetrics from './containers/ConsumerMetrics.jsx';

// Mapping the selected data from the store to producer and consumer metrics
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

// Mapping dispatch actions to trigger state changes for Producer and Consumer metrics
const mapDispatchToProps = (dispatch) => ({
  addProducerData: (newData) => dispatch(actions.addProducerData(newData)),
  addConsumerData: (newData) => dispatch(actions.addConsumerData(newData)),
});

// Renders ProducerMetrics and ConsumerMetrics and updates props
class Dashboard extends Component {
  // As soon as this component loads, establish a Web Socket connection to our server
  componentDidMount() {
    const socket = io.connect('http://localhost:5000');

    // Socket event to handle updates to producer metrics
    socket.on('producer', (data) => this.props.addProducerData(data));

    // Socket event to handle updates to consumer metrics
    socket.on('consumer', (data) => this.props.addConsumerData(data));
  }
  // Render
  render() {
    // Updated properties from store
    const {
      producerDataSize,
      producerProcessingTimeInMilliseconds,
      producerPendingDuration,
      consumerDataSize,
      consumerProcessingTimeInMilliseconds,
      consumerPendingDuration,
    } = this.props;
    // Returns ProducerMetrics and ConsumerMetrics with updated state for
    // DATA SIZE, PROCESSING TIME, PENDING DURATION
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
