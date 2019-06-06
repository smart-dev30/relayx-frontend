import { createAction as createTypedAction } from 'redux-actions';

export const createAction = createTypedAction;

export const createPromiseAction = type => {
  return (payload, resolve, reject) => ({
    type,
    payload,
    resolve,
    reject,
  });
};
