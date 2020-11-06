import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Homepage from './Homepage';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
/* eslint-disable */

//Renders the titles and the DASHBOARD component
class Wrapper extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              <h2>kafkaQ</h2>
            </Col>
            <Col>
              <h1>Dashboard</h1>
            </Col>
            <Col>
              <h2>User</h2>
            </Col>
          </Row>
        </Container>
        <Container>
          <Col>
            <Dashboard />
          </Col>
        </Container>
      </div>
      // <div className="app">
      //   <div className="title">
      //     <h2>kafkaQ</h2>
      //     <h1>Dashboard</h1>
      //   </div>
      //   <div className="dashboard-container">
      //     <Dashboard />
      //   </div>
      // </div>
    );
  }
}

export default Wrapper;
