import React, { Component } from 'react';
import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';
import Wrapper from './Wrapper.jsx';

// Renders the wrapper component
class App extends Component {
  render() {
    return <Wrapper />;
  }
}

export default App;
