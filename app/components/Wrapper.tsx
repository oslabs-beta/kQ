import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

import logo from './assets/Kafkaq-Final-large-white.png';

//Renders the titles and the DASHBOARD component
class Wrapper extends Component<{}> {
  render(): JSX.Element {
    // 'Dashboard', 'Documentation', 'About kafkaQ', 'Our Team'

    return (
      <Switch>
        {/* <Route path="/" exact>
          <Sidebar />
        </Route> */}

        <Route path="/" exact>
          <div className="app">
            <div className="title">
              {/* <h2>kafkaQ</h2> */}
              {/* <img src="../assets/kafkaq_logoTest.svg" />
          <img src="../assets/Kafkaq-Final-large-no words.png" /> */}
              <img src={logo} />
              <h1>Dashboard</h1>
            </div>
            <div className="container">
              <Sidebar />
              <Dashboard />
            </div>
            <div className="footer">
              <h1>kafkaQ</h1>
            </div>
          </div>
        </Route>

        <Route path="/documentation">
          <h1>docs</h1>
        </Route>

        <Route path="/about-kafkaq">
          <h1>kq</h1>
        </Route>

        <Route path="/our-team">
          <h1>team</h1>
        </Route>
      </Switch>
    );
  }
}

export default Wrapper;
