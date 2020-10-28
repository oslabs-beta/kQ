// rcc tab to show react boilerplate
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import About from './About.jsx';
import Demo from './Demo.jsx';
import Docs from './Docs.jsx';
import Home from './Home.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          This is App.
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/demo">Demo</Link>
              </li>
              <li>
                <Link to="/docs">Docs</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact={true} path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/demo">
              <Demo />
            </Route>
            <Route path="/docs">
              <Docs />
            </Route>
            <Demo />
          </Switch>
          <footer>
            <p>We are kafkaQ</p>
            <div>
              Contact us:
              <a href="https://www.gmail.com">kafkaQ21@gmail.com </a>
              <br />
              Twitter:
              <a href="https://www.twitter.com">#kafkaQ</a>
            </div>
            Join us:
            <a href="https://codesmith.io/">Career</a>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
