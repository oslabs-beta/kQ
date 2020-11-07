import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';
import Wrapper from './Wrapper.jsx';

// Renders the wrapper component
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Wrapper />
      </HashRouter>
    );
  }
}

export default App;
