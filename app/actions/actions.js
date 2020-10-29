import { ADD_PRODUCER_DATA, ADD_CONSUMER_DATA } from '../constants/actionTypes';

export const addProducerData = (newData) => ({
  type: ADD_PRODUCER_DATA,
  payload: {
    data: newData,
  },
});

export const addConsumerData = (newData) => ({
  type: ADD_CONSUMER_DATA,
  payload: {
    data: newData,
  },
});
