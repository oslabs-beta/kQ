import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import ProducerMetrics from './containers/ProducerMetrics';
import ConsumerMetrics from './containers/ConsumerMetrics';

interface NewData {
  size: number;
  pendingDuration: number;
  processingTimeInMilliseconds: number;
}

interface DataPoints {
  sum: number;
  numOfDataPoints: number;
  smallest: number;
  largest: number;
}

interface Producer {
  dataSize: DataPoints;
  processingTimeInMilliseconds: DataPoints;
  pendingDuration: DataPoints;
}

interface Consumer {
  dataSize: DataPoints;
  processingTimeInMilliseconds: DataPoints;
  pendingDuration: DataPoints;
}

interface State {
  producer: Producer;
  consumer: Consumer;
}

interface DashboardProps {
  producerDataSize: DataPoints;
  producerProcessingTimeInMilliseconds: DataPoints;
  producerPendingDuration: DataPoints;
  consumerDataSize: DataPoints;
  consumerProcessingTimeInMilliseconds: DataPoints;
  consumerPendingDuration: DataPoints;
  addProducerData(data: NewData): void;
  addConsumerData(data: NewData): void;
}

// Mapping the selected data from the store to producer and consumer metrics within props
const mapStateToProps = (state: State) => ({
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

// Mapping dispatch actions to props object and triggers state changes for producer and consumer metrics
const mapDispatchToProps = (dispatch: any) => ({
  addProducerData: (newData: NewData) =>
    dispatch(actions.addProducerData(newData)),
  addConsumerData: (newData: NewData) =>
    dispatch(actions.addConsumerData(newData)),
});

// Renders ProducerMetrics and ConsumerMetrics components with props
class Dashboard extends Component<DashboardProps> {
  // As soon as this component loads, establish a Web Socket connection to our server
  componentDidMount(): void {
    const socket = io.connect('http://localhost:5000');

    // Socket event to handle updates to producer metrics
    socket.on('producer', (data: NewData) => this.props.addProducerData(data));

    // Socket event to handle updates to consumer metrics
    socket.on('consumer', (data: NewData) => this.props.addConsumerData(data));
  }
  // Render
  render(): JSX.Element {
    // Destructure properties from our state
    const {
      producerDataSize,
      producerProcessingTimeInMilliseconds,
      producerPendingDuration,
      consumerDataSize,
      consumerProcessingTimeInMilliseconds,
      consumerPendingDuration,
    } = this.props;
    // Returns ProducerMetrics and ConsumerMetrics components with props for
    // data size, processing time, pending duration
    return (
      <div className="mainDashboard">
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
