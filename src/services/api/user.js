import { get, post } from './request';

export const User = {
  async receiveAddress(handleName) {
    return get(`api/receivingAddress/${handleName}`);
  },

  async userInit(body) {
    return post('v1/user/init', { body });
  },

  async getUserInfo(address) {
    return get(`v1/user/info?address=${address}`);
  },
};
