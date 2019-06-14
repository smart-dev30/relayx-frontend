import { SUCCESS, REQUEST } from '../utils';

import { LOGOUT } from '../actions';

import {
  GET_ORDERS,
  GET_ORDER_DETAIL,
  SELECT_ORDER,
} from '../actions/order';

const INITIAL_STATE = {
  orders: [],
  selectedOrder: null,
  selectedTopUp: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_ORDER:
      return { ...state, selectedOrder: action.payload };

    case GET_ORDERS[REQUEST]:
      return { ...state, orders: [] };

    case GET_ORDERS[SUCCESS]:
      return { ...state, orders: action.payload.list || [] };

    case GET_ORDER_DETAIL[SUCCESS]:
      return { ...state, selectedTopUp: action.payload };

    case LOGOUT:
      return INITIAL_STATE;

    default:
      return state
  }
}