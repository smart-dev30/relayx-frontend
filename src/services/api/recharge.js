import { get, post } from './request';

export const Recharge = {
  async accept(serialNumber) {
    return get(`v1/recharge/accept/${serialNumber}`);
  },
  async close(body) {
    return post('v1/recharge/cancel', { body });
  },
  async send(serialNumber) {
    return get(`v1/recharge/send/${serialNumber}`);
  }
};
