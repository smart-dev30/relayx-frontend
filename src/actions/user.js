import { REQUEST, SUCCESS, FAILURE, createRequestTypes, action } from '../utils/constants';

export const USER_INIT = createRequestTypes('USER_INIT');
export const LOGOUT = `LOGOUT_REQUEST`;

export const userInit = {
  request: (params) => action(USER_INIT[REQUEST], { params }),
  success: (data) => action(USER_INIT[SUCCESS], { data }),
  failure: (error) => action(USER_INIT[FAILURE], { error }),
}

export const logout = () => action(LOGOUT);
