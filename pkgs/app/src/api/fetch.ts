export async function fetchApi<
  T extends Record<string, any>,
  TQuery = undefined
>(
  path: string,
  opts?: { qp?: TQuery; body?: any },
  method?: RequestInit['method']
): Promise<{ res: Response; json: T }> {
  const url = new URL('http://localhost:3000/');
  url.pathname = `/0${path}`;

  if (opts?.qp) {
    url.search = new URLSearchParams(opts.qp).toString();
  }

  const res = await fetch(url, {
    method: method || 'GET',
    body: opts?.body && JSON.stringify(opts.body),
    headers: {
      'content-type': 'application/json',
    },
  });
  let json: T;
  if (res.status !== 204) {
    json = (await res.json()) as T;
  }

  return { res, json: json! || {} };
}