import { REQUEST, SUCCESS, createRequestTypes } from '../utils/constants';
import { createAction, createPromiseAction } from '../utils'

export const GET_ORDERS = createRequestTypes('GET_ORDERS');
export const SELECT_ORDER = 'SELECT_ORDER';
export const GET_ORDER_DETAIL = createRequestTypes('GET_ORDER_DETAIL');

export const orderActionCreators = {
  selectOrder: createAction(SELECT_ORDER),

  getOrdersRequest: createPromiseAction(GET_ORDERS[REQUEST]),
  getOrdersSuccess: createAction(GET_ORDERS[SUCCESS]),

  getOrderDetailRequest: createPromiseAction(GET_ORDER_DETAIL[REQUEST]),
  getOrderDetailSuccess: createAction(GET_ORDER_DETAIL[SUCCESS]),
};
