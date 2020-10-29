import { ADD_NEW_DATA } from '../constants/actionTypes';

export const addNewData = (newData) => {
  type: ADD_NEW_DATA,
  payload: {
    data: {
      newData
    }
  },
}

