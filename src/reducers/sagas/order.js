import { all, fork, call, put, take } from 'redux-saga/effects';
import { REQUEST } from '../../utils';

import noop from 'lodash/noop';

import { Order } from '../../services/api';
import {
  GET_ORDERS,
  orderActionCreators,
} from '../../actions/order';

function* asyncGetOrders({ payload, resolve = noop, reject = noop }) {
  try {
    const response = yield call(Order.getOrderList, payload);
    console.log('GetOrders:', response.data)
    yield put(orderActionCreators.getOrdersSuccess(response.data))
    resolve(response.data);
  } catch (e) {
    reject(e || {});
  }
}

function* watchGetOrders() {
  while (true) { 
    const action = yield take(GET_ORDERS[REQUEST]);
    yield* asyncGetOrders(action) 
  }
}

export default function*() {
  yield all([
    fork(watchGetOrders),
  ]);
}
