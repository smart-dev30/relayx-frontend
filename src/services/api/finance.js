import { get } from './request';
import { StorageKeys } from '../../utils';

export const Finance = {
  async getBalance(address) {
    return get(`v1/finance/balance/${address}`);
  },

  async getCurrency() {
    return get('v1/setting/support/currency/get');
  },

  async getSupportCurrencies(symbolType) {
    return get(`v1/setting/support/currency/list/${symbolType}`)
  },

  async getPaymentOptions() {
    return get('v1/setting/payment', { store: StorageKeys.PaymentOptions });
  },
};
