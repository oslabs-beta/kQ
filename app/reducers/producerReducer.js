import { ADD_NEW_DATA } from '../constants/actionTypes';

const initialState = {
  dataSize: {
    sum: 0,
    numOfDataPoints: 0,
    smallest: Number.POSITIVE_INFINITY,
    largest: Number.NEGATIVE_INFINITY,
  },
  processingTimeInMilliseconds: {
    sum: 0,
    numOfDataPoints: 0,
    smallest: Number.POSITIVE_INFINITY,
    largest: Number.NEGATIVE_INFINITY,
  },
  pendingDuration: {
    sum: 0,
    numOfDataPoints: 0,
    smallest: Number.POSITIVE_INFINITY,
    largest: Number.NEGATIVE_INFINITY,
  },
};

const producerReducer = (state = initialState, action) => {
  console.log('reducer invoked');
  console.log(action.payload);

  switch (action.type) {
    case ADD_NEW_DATA:
      const {
        size,
        processingTimeInMilliseconds,
        pendingDuration,
      } = action.payload.data;
      console.log('data are:', action.payload.data);
      console.log(size);
      console.log(processingTimeInMilliseconds);
      console.log(pendingDuration);

      const newDataSize = {
        sum: state.dataSize.sum + size,
        numOfDataPoints: state.dataSize.numOfDataPoints + 1,
        smallest: Math.min(state.dataSize.smallest, size),
        largest: Math.max(state.dataSize.largest, size),
      };

      const newProcessingTimeInMilliseconds = {
        sum:
          state.processingTimeInMilliseconds.sum + processingTimeInMilliseconds,
        numOfDataPoints: state.processingTimeInMilliseconds.numOfDataPoints + 1,
        smallest: Math.min(
          state.processingTimeInMilliseconds.smallest,
          processingTimeInMilliseconds
        ),
        largest: Math.max(
          state.processingTimeInMilliseconds.largest,
          processingTimeInMilliseconds
        ),
      };

      const newPendingDuration = {
        sum: state.pendingDuration.sum + pendingDuration,
        numOfDataPoints: state.pendingDuration.numOfDataPoints + 1,
        smallest: Math.min(state.pendingDuration.smallest, pendingDuration),
        largest: Math.max(state.pendingDuration.largest, pendingDuration),
      };

      return {
        ...state,
        dataSize: newDataSize,
        processingTimeInMilliseconds: newProcessingTimeInMilliseconds,
        pendingDuration: newPendingDuration,
      };

    default:
      return state;
  }
};

export default producerReducer;
