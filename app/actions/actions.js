import { ADD_PRODUCER_DATA, ADD_CONSUMER_DATA } from '../constants/actionTypes';

// Action creator that describes and generates the actions to be dispatched for Producer
export const addProducerData = (newData) => ({
  type: ADD_PRODUCER_DATA,
  payload: {
    data: newData,
  },
});

// Action creator that describes and generates the actions to be dispatched for Producer
export const addConsumerData = (newData) => ({
  type: ADD_CONSUMER_DATA,
  payload: {
    data: newData,
  },
});
