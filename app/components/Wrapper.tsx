import React, { Component } from 'react';
import Dashboard from './Dashboard';
// import Homepage from './Homepage';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
/* eslint-disable */

//Renders the titles and the DASHBOARD component
class Wrapper extends Component<{}> {
  render(): JSX.Element {
    return (
      <div className="app">
        <div className="title">
          <h2>kafkaQ</h2>
          <h1>Dashboard</h1>
        </div>
        <div className="dashboard-container">
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default Wrapper;
