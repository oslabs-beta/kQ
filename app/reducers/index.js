import { combineReducers } from 'redux';
import producerReducer from './producerReducer';
import consumerReducer from './consumerReducer';

const reducers = combineReducers({
  producer: producerReducer,
  consumer: consumerReducer,
});

export default reducers;
