import { REQUEST, SUCCESS, createRequestTypes } from '../utils/constants';
import { createAction, createPromiseAction } from '../utils'

export const USER_INIT = createRequestTypes('USER_INIT');
export const USER_INFO = createRequestTypes('USER_INFO');
export const RECEIVE_ADDRESS = createRequestTypes('RECEIVE_ADDRESS');
export const LOGOUT = `LOGOUT_REQUEST`;

export const userActionCreators = {
  userInitRequest: createPromiseAction(USER_INIT[REQUEST]),
  userInitSuccess: createAction(USER_INIT[SUCCESS]),

  receiveAddressRequest: createPromiseAction(RECEIVE_ADDRESS[REQUEST]),
  receiveAddressSuccess: createAction(RECEIVE_ADDRESS[SUCCESS]),

  userInfoRequest: createPromiseAction(USER_INFO[REQUEST]),
  userInfoSuccess: createPromiseAction(USER_INFO[SUCCESS]),

  logout: createAction(LOGOUT)
};
