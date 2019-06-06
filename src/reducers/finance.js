import { SUCCESS } from '../utils';

import { 
  PAYMENT_OPTIONS,
  LOGOUT,
} from '../actions';

const INITIAL_STATE = {
  paymentOptions: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case PAYMENT_OPTIONS[SUCCESS]:
      return { ...state, paymentOptions: action.payload}

    case LOGOUT:
      return INITIAL_STATE;

    default:
      return state
  }
}