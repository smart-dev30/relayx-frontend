import { all, fork, call, put, take } from 'redux-saga/effects';
import { REQUEST } from '../../utils';

import noop from 'lodash/noop';

import { Order } from '../../services/api';
import {
  GET_ORDERS,
  GET_ORDER_DETAIL,
  orderActionCreators,
} from '../../actions/order';

function* asyncGetOrders({ payload, resolve = noop, reject = noop }) {
  try {
    const response = yield call(Order.getOrderList, payload);
    yield put(orderActionCreators.getOrdersSuccess(response.data))
    resolve(response.data);
  } catch (e) {
    reject(e || {});
  }
}

function* asyncGetOrderDetail({ payload, resolve = noop, reject = noop }) {
  try {
    const response = yield call(Order.getOrderDetail, payload);
    yield put(orderActionCreators.getOrderDetailSuccess(response.data))
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

function* watchGetOrderDetail() {
  while (true) {
    const action = yield take(GET_ORDER_DETAIL[REQUEST]);
    yield* asyncGetOrderDetail(action)
  }
}

export default function* () {
  yield all([
    fork(watchGetOrders),
    fork(watchGetOrderDetail),
  ]);
}
