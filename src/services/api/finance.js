import { get, post } from './request';

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

  async updateCurrency(body) {
    return post('v1/earn/order/complete', { body });
  },
};
