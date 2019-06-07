import { SUCCESS } from '../utils';

import { LOGOUT } from '../actions';

import {
  GET_ORDERS,
  SELECT_ORDER,
} from '../actions/order';

const INITIAL_STATE = {
  orders: [],
  selectedOrder: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_ORDER:
      return { ...state, selectedOrder: action.payload };

      case GET_ORDERS[SUCCESS]:
      return { ...state, orders: action.payload.list || [] };

      case LOGOUT:
      return INITIAL_STATE;

    default:
      return state
  }
}