import { call, put } from 'redux-saga/effects';
import { User } from '../../services/api';
import {
  userInit as userInitActions,
} from '../../actions';

export function* userInit(params) {
  try {
    const payload = yield call(User.userInit, params);
    console.log('User init response:', payload);
    yield put(userInitActions.success(payload));
  } catch (e) {
    yield put(userInitActions.failure(e));
  }
}
