import { all, fork } from 'redux-saga/effects';

import { default as mainSaga } from './main';
import { default as financeSaga } from './finance';
import { default as orderSaga } from './order';
import { default as rechargeSaga } from './recharge';

export default function* root() {
  yield all([
    fork(mainSaga),
    fork(financeSaga),
    fork(orderSaga),
    fork(rechargeSaga),
  ]);
}
