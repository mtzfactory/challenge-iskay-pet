import {getErrorMessage} from '~/toolbox';

import {HttpError} from './http.exceptions';

type Url = `https://${string}`;

type Config = Omit<RequestInit, 'body' | 'method'>;

async function processResponse<T extends unknown>(
  response: Response,
): Promise<T> {
  try {
    const data = await response.json();

    if (!response.ok) {
      const message =
        (data && data.message) || response.statusText || 'Http error';
      return Promise.reject(new HttpError(response.status, message, data));
    }

    return data;
  } catch (error) {
    const message = getErrorMessage(error);
    return Promise.reject(new Error(message));
  }
}

export const createHeaders = (headers: Headers | Record<string, string>) =>
  new Headers(headers);

export async function get<T extends unknown>(
  url: Url,
  config: Config = {},
): Promise<T> {
  try {
    const response = await fetch(url, {
      ...config,
      method: 'GET',
    });
    return processResponse<T>(response);
  } catch (error) {
    const message = getErrorMessage(error);
    return Promise.reject(new Error(message));
  }
}

export async function post<T extends unknown>(
  url: Url,
  params: Record<string, unknown>,
  config: Config = {},
): Promise<T> {
  try {
    const response = await fetch(url, {
      ...config,
      body: JSON.stringify(params),
      method: 'POST',
    });

    return processResponse<T>(response);
  } catch (error) {
    const message = getErrorMessage(error);
    return Promise.reject(new Error(message));
  }
}
