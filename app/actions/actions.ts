import { ADD_PRODUCER_DATA, ADD_CONSUMER_DATA } from '../constants/actionTypes';

interface NewData {
  size: number;
  pendingDuration: number;
  processingTimeInMilliseconds: number;
}

interface Metrics {
  data: NewData;
}

interface action {
  type: string;
  payload: Metrics;
}

// Action creator that generates the actions to be dispatched for producer
export const addProducerData = (newData: NewData): action => ({
  type: ADD_PRODUCER_DATA,
  payload: {
    data: newData,
  },
});

// Action creator that generates the actions to be dispatched for consumer
export const addConsumerData = (newData: NewData): action => ({
  type: ADD_CONSUMER_DATA,
  payload: {
    data: newData,
  },
});
