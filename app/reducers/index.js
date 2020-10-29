import { combineReducers } from 'redux';
import producerReducer from './producerReducer';

const reducers = combineReducers({
  producer: producerReducer,
});

export default reducers;
