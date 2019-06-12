import { createPromiseAction } from '../utils'

export const RECHARGE_ACCEPT = 'RECHARGE_ACCEPT_REQUEST';
export const RECHARGE_CLOSE = 'RECHARGE_CLOSE_REQUEST';
export const RECHARGE_SEND = 'RECHARGE_SEND_REQUEST';

export const rechargeActionCreators = {
  getRechargeInfo: createPromiseAction(RECHARGE_ACCEPT),
  setRechargeClose: createPromiseAction(RECHARGE_CLOSE),
  getRechargeSend: createPromiseAction(RECHARGE_SEND),
};
