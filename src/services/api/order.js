import { post } from './request';

export const Order = {
  async create(body) {
    return post('v1/spot/order/create', { body });
  },
  
  async getOrderList(body) {
    return post('v1/earn/order/list', { body });
  },
  
  async completeOrder(body) {
    return post('v1/earn/order/complete', { body });
  }
};
