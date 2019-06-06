import { get } from './request';

export const Spot = {
  async charge() {
    return get(`v1/spot/charge`);
  },

  async getCurrencyExchangeRate(currencySymbolId) {
    return get(`v1/spot/currency/rate/${currencySymbolId}`);
  },
};
