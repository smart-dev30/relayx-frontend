export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const storageKey = (key) => `RELAYX-LOCAL-STORAGE-${key}`;

export const createRequestTypes = base => {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc
  }, {})
}

export const StorageKeys = {
  DeviceId: storageKey('DEVICE-ID'),
  HandleAddress: storageKey('HANDLE-NAME'),

  PaymentOptions: storageKey('PAYMENT-OPTIONS'),
  SelectedPaymentOption: storageKey('SELECTED-PAYMENT-OPTIONS'),
}

export const TOPUP_TIME_LIMIT = 10; // seconds
