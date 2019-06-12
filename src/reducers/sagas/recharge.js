import { all, fork, call, take } from 'redux-saga/effects';

import noop from 'lodash/noop';

import { Recharge } from '../../services/api';
import { RECHARGE_ACCEPT, RECHARGE_CLOSE, RECHARGE_SEND } from '../../actions';

function* asyncGetRechargeInfo({ payload, resolve = noop, reject = noop }) {
  try {
    const response = yield call(Recharge.accept, payload);
    if (response.code === 0) {
      resolve(response.data);
    } else {
      reject(response || {});
    }
  } catch (e) {
    reject(e || {});
  }
}

function* asyncSetRechargeClose({ payload, resolve = noop, reject = noop }) {
  try {
    const response = yield call(Recharge.close, payload);
    if (response.code === 0) {
      resolve(response.data);
    } else {
      reject(response || {});
    }
  } catch (e) {
    reject(e || {});
  }
}

function* asyncGetRechargeSend({ payload, resolve = noop, reject = noop }) {
  try {
    const response = yield call(Recharge.send, payload);
    if (response.code === 0) {
      resolve(response.data);
    } else {
      reject(response || {});
    }
  } catch (e) {
    reject(e || {});
  }
}

function* watchGetRechargeInfo() {
  while (true) {
    const action = yield take(RECHARGE_ACCEPT);
    yield* asyncGetRechargeInfo(action)
  }
}

function* watchSetRechargeClose() {
  while (true) {
    const action = yield take(RECHARGE_CLOSE);
    yield* asyncSetRechargeClose(action)
  }
}

function* watchGetRechargeSend() {
  while (true) {
    const action = yield take(RECHARGE_SEND);
    yield* asyncGetRechargeSend(action)
  }
}

export default function* () {
  yield all([
    fork(watchGetRechargeInfo),
    fork(watchSetRechargeClose),
    fork(watchGetRechargeSend),
  ]);
}
