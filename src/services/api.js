import { post } from './request';

export const User = {
  async userInit(body) {
    return post('user/init', { body });
  },
};
