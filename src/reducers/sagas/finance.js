import { all, fork, call, put, take } from 'redux-saga/effects';
import { REQUEST } from '../../utils';

import noop from 'lodash/noop';

import { Finance } from '../../services/api';
import {
  PAYMENT_OPTIONS,
  financeActionCreators,
} from '../../actions';

function* asyncGetPayOptions({ resolve = noop, reject = noop }) {
  try {
    const response = yield call(Finance.getPaymentOptions);
    yield put(financeActionCreators.getPayOptionsSuccess(response.data))
    resolve(response.data);
  } catch (e) {
    reject(e || {});
  }
}

function* watchGetPayOptions() {
  while (true) {
    const action = yield take(PAYMENT_OPTIONS[REQUEST]);
    yield* asyncGetPayOptions(action)
  }
}

export default function* () {
  yield all([
    fork(watchGetPayOptions),
  ]);
}
