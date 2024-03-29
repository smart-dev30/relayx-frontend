import queryString from 'query-string';
import { API_URL } from '../../utils/config';
import { StorageKeys } from '../../utils/constants';

export async function request(_url, { method, body, store }) {
  let url = _url;
  if (!url || !method) {
    throw new Error('Missing method param(s), url or method');
  }

  const devId = localStorage.getItem(StorageKeys.DeviceId)
  if (!devId) {
    throw new Error('No DeviceId or handle name provided');
  }

  const options = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      devId,
    },
  };

  if ((method === 'post' || method === 'put' || method === 'delete') && body) {
    options.body = JSON.stringify(body);
  } else if (method === 'get' && body) {
    url += `?${queryString.stringify(body)}`;
  }

  const response = await fetch(`${API_URL}${url}`, options);
  const result = await response.json();
  const { data } = result;

  if (store) {
    localStorage.setItem(store, JSON.stringify(data));
  }

  return result;
}

export async function get(url, params) {
  return request(url, {
    ...params,
    method: 'get',
  });
}

export async function post(url, params) {
  return request(url, {
    ...params,
    method: 'post',
  });
}

export async function put(url, params) {
  return request(url, {
    ...params,
    method: 'put',
  });
}

export async function remove(url, params) {
  return request(url, {
    ...params,
    method: 'delete',
  });
}
