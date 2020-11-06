import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './app.global.scss';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css'


// Redux is implemented here using "Provider" and store attribute
document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
