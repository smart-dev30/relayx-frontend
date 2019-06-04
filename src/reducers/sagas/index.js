import { all, takeEvery } from 'redux-saga/effects';
import { USER_INIT } from '../../actions';
import { REQUEST } from '../../utils';
import { userInit } from './main';

export default function* root() {
  yield all([
    takeEvery(USER_INIT[REQUEST], userInit),
  ]);
}