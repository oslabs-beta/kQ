import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './app.global.css';

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('root'));
});
