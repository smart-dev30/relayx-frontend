import { SUCCESS, StorageKeys, getFromStorage, saveToStorage } from '../utils';

import { LOGOUT } from '../actions';

import {
  SET_PAYMENT_OPTION,
  PAYMENT_OPTIONS,
} from '../actions/finance';

const INITIAL_STATE = {
  paymentOption: getFromStorage(StorageKeys.SelectedPaymentOption),
  paymentOptions: getFromStorage(StorageKeys.PaymentOptions) || [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_PAYMENT_OPTION:
      saveToStorage(StorageKeys.SelectedPaymentOption, action.payload);
      return { ...state, paymentOption: action.payload };

      case PAYMENT_OPTIONS[SUCCESS]:
      return { ...state, paymentOptions: action.payload };

      case LOGOUT:
      return INITIAL_STATE;

    default:
      return state
  }
}