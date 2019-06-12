import { all, fork, call, put, take } from 'redux-saga/effects';
import { REQUEST } from '../../utils';

import { User } from '../../services/api';
import {
  USER_INIT,
  RECEIVE_ADDRESS,
  userActionCreators,
} from '../../actions';

function* asyncUserInit({ payload, resolve, reject }) {
  try {
    const response = yield call(User.userInit, payload);
    yield put(userActionCreators.userInfoSuccess(response.data.data))
    resolve(response.data.data);
  } catch (e) {
    reject(e || {});
  }
}

function* asyncReceiveAddress({ payload, resolve, reject }) {
  try {
    const response = yield call(User.receiveAddress, payload);
    yield put(userActionCreators.receiveAddressSuccess(response.receivingAddress))
    resolve(response.receivingAddress)
  } catch (e) {
    reject(e || {});
  }
}

function* watchUserInit() {
  while (true) {
    const action = yield take(USER_INIT[REQUEST]);
    yield* asyncUserInit(action)
  }
}

function* watchReceiveAddress() {
  while (true) {
    const action = yield take(RECEIVE_ADDRESS[REQUEST]);
    yield* asyncReceiveAddress(action)
  }
}

export default function* () {
  yield all([
    fork(watchUserInit),
    fork(watchReceiveAddress),
  ]);
}
