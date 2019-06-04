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

export const action = (type, payload = {}) => {
  return { type, ...payload }
}

export const StorageKeys = {
  DeviceId: storageKey('DEVICE-ID'),
}