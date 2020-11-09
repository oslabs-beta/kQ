import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Wrapper from './Wrapper';

// Renders the wrapper component
class App extends Component<{}> {
  render(): JSX.Element {
    return (
      <HashRouter>
        <Wrapper />
      </HashRouter>
    );
  }
}

export default App;
