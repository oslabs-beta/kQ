import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
import './styles/styles.scss';

render(<App />, document.getElementById('root') as HTMLElement);
