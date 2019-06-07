import { REQUEST, SUCCESS, createRequestTypes } from '../utils/constants';
import { createAction, createPromiseAction } from '../utils'

export const PAYMENT_OPTIONS = createRequestTypes('PAYMENT_OPTIONS');
export const SET_PAYMENT_OPTION = 'SET_PAYMENT_OPTION';

export const financeActionCreators = {
  setPayOption: createAction(SET_PAYMENT_OPTION),
  getPayOptionsRequest: createPromiseAction(PAYMENT_OPTIONS[REQUEST]),
  getPayOptionsSuccess: createAction(PAYMENT_OPTIONS[SUCCESS]),
};
