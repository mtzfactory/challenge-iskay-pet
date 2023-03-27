import Config from 'react-native-config';

import {createHeaders, get as httpGet, post as httpPost} from '~/infra/http';
import {getErrorMessage} from '~/toolbox';
import type {Store} from '~/types';

import {paths} from './paths';

type Url = `https://${string}`;
type Params = Record<string, unknown>;
type Get = <T>(url: Url, config?: Record<string, unknown>) => Promise<T>;
type Post = <T>(
  url: Url,
  params: Params,
  config?: Record<string, unknown>,
) => Promise<T>;

const headers = createHeaders({
  'Content-Type': 'application/json;charset=UTF-8',
});

const getStores = (baseUrl: Url, get: Get) => async () => {
  try {
    const stores = await get<Store[]>(`${baseUrl}${paths.stores}`, {
      headers,
    });
    return {data: stores, error: null};
  } catch (error) {
    const message = getErrorMessage(error);
    return {data: null, error: message};
  }
};

const chekin =
  (baseUrl: Url, post: Post) => async (storeId: string, taskId: string) => {
    try {
      const response = await post<Store[]>(
        `${baseUrl}${paths.checkin}`,
        {storeId, taskId},
        {headers},
      );
      return {data: response, error: null};
    } catch (error) {
      const message = getErrorMessage(error);
      return {data: null, error: message};
    }
  };

export const IkpClient = (
  baseUrl = Config.BASE_URL,
  get = httpGet,
  post = httpPost,
) =>
  Object.freeze({
    checkin: chekin(baseUrl, post),
    getStores: getStores(baseUrl, get),
  });

export const ikpClient = IkpClient();
