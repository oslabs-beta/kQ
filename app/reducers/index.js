import { combineReducers } from 'redux';
import producerReducer from './producerReducer';
import consumerReducer from './consumerReducer';

// combines reducers for Producer and Consumer data to so that every reducer is called at once and therefore
// all data is updated at the same time and gathered in one object
const reducers = combineReducers({
  producer: producerReducer,
  consumer: consumerReducer,
});

export default reducers;
