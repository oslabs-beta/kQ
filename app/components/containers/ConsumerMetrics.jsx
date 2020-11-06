import React, { Component } from 'react';
import Metric from '../Metric.jsx';
import { Container, Col, Row } from 'react-bootstrap';

// Electron App:
// Renders consumer METRIC components for: data size, processing time, pending durationion
class ConsumerMetrics extends Component {
  render() {
    const { dataSize, processingTime, pendingDuration } = this.props;

    return (
      <div className="dashboard">
        {/* <Container>
          <Container>
            <Row>
              <Col>
                <h1 className="metric-heading">Consumer Metrics</h1>
              </Col>
            </Row>
          </Container> */}
        {/* <div className="metrics-container"> */}
        {/* <Container>
            <Row>
              <Col>
                <Metric title={'Data Size'} data={dataSize} />
              </Col>
              <Col>
                <Metric title={'Processing Time'} data={processingTime} />
              </Col>
              <Col>
                <Metric title={'Pending Duration'} data={pendingDuration} />
              </Col>
            </Row>
          </Container> */}

        {/* </div> */}
        {/* <DataSize />
        <ProcessingTime /> */}
        {/* </Container> */}
        <div className="dashboard">
          <h1 className="metric-heading">Consumer Metrics</h1>
          <div className="metrics-container">
            <Metric title={'Data Size'} data={dataSize} />
            <Metric title={'Processing Time'} data={processingTime} />
            <Metric title={'Pending Duration'} data={pendingDuration} />
          </div>
          {/* <DataSize />
        <ProcessingTime /> */}
        </div>
      </div>
    );
  }
}

export default ConsumerMetrics;
