import { all, fork } from 'redux-saga/effects';

import { default as mainSaga } from './main';
import { default as financeSaga } from './finance';

export default function* root() {
  yield all([
    fork(mainSaga),
    fork(financeSaga),
  ]);
}
