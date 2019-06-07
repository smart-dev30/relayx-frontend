import { SUCCESS, getFromStorage, StorageKeys } from '../utils';

import { 
  USER_INIT, 
  RECEIVE_ADDRESS, 
  LOGOUT,
} from '../actions';

const INITIAL_STATE = {
  bsvAddress: getFromStorage(StorageKeys.HandleAddress),
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVE_ADDRESS[SUCCESS]:
      return { ...state, bsvAddress: action.payload}

    case USER_INIT[SUCCESS]:
      console.log(action);
      debugger;
      return { ...state };

    case LOGOUT:
      localStorage.clear();
      return INITIAL_STATE;

    default:
      return state
  }
}