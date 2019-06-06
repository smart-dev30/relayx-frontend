import { REQUEST, SUCCESS, createRequestTypes } from '../utils/constants';
import { createAction, createPromiseAction } from '../utils'

export const PAYMENT_OPTIONS = createRequestTypes('PAYMENT_OPTIONS');

export const financeActionCreators = {
  getPayOptionsRequest: createPromiseAction(PAYMENT_OPTIONS[REQUEST]),
  getPayOptionsSuccess: createAction(PAYMENT_OPTIONS[SUCCESS]),
};
