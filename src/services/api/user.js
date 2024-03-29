import { get, post } from './request';
import { StorageKeys } from '../../utils';

export const User = {
  async receiveAddress(handleName) {
    return get(`api/receivingAddress/${handleName}`, { store: StorageKeys.HandleAddress });
  },

  async userInit(body) {
    return post('v1/user/init', { body });
  },

  async getUserInfo(address) {
    return get(`v1/user/info?address=${address}`);
  },
};
