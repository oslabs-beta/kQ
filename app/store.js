import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

// Redux store that returns the complete state tree of the application
const store = createStore(reducers, composeWithDevTools());

export default store;
