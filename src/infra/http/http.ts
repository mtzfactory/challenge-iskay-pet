type Url = `https://${string}`;

const headers = new Headers({
  'Content-Type': 'application/json;charset=UTF-8',
});

async function processResponse<T extends unknown>(
  response: Response,
): Promise<T> {
  const data = await response.json();

  if (!response.ok) {
    const error = new Error(`${response.statusText} (${response.status})`);

    Promise.reject(error);
  }

  return data;
}

export async function get<T extends unknown>(url: Url): Promise<T> {
  const response = await fetch(url, {
    headers,
    method: 'GET',
  });

  return await processResponse<T>(response);
}

export async function post<T extends unknown>(
  url: Url,
  params: Record<string, unknown>,
): Promise<T> {
  const response = await fetch(url, {
    body: JSON.stringify(params),
    headers,
    method: 'POST',
  });

  return await processResponse<T>(response);
}
