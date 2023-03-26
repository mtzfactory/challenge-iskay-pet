import {getErrorMessage} from '~/toolbox';

type Url = `https://${string}`;

type Config = Omit<RequestInit, 'body' | 'method'>;

async function processResponse<T extends unknown>(
  response: Response,
): Promise<T> {
  try {
    const data = await response.json();

    if (!response.ok) {
      return Promise.reject(data);
    }

    return data;
  } catch (error) {
    const message = getErrorMessage(error);
    return Promise.reject(message);
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
    return await processResponse<T>(response);
  } catch (error) {
    const message = getErrorMessage(error);
    return Promise.reject(message);
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

    return await processResponse<T>(response);
  } catch (error) {
    const message = getErrorMessage(error);
    return Promise.reject(message);
  }
}
