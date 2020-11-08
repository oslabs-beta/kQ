import React, { PureComponent } from 'react';
import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';
import Wrapper from './Wrapper';

// Renders the wrapper component
class App extends PureComponent<{}> {
  render(): JSX.Element {
    return <Wrapper />;
  }
}

export default App;
