import type { Dispatcher } from 'undici';
import { expect } from 'vitest';

import type { API, APIPaths } from '../types/api/endpoints';

import { isError, isValidationError } from './fetch';
import type { ApiClient } from './fetch';
import { seedSimpleUser } from './seed/seed';

export async function shouldBeProtected(
  res: Dispatcher.ResponseData & { json: any }
) {
  isError(res.json);
  expect(res.json).toStrictEqual({
    error: {
      code: '401_unauthorized',
    },
  });
  expect(res.statusCode).toBe(401);
}

export async function shouldNotAllowQueryParams(
  res: Dispatcher.ResponseData & { json: any }
) {
  isValidationError(res.json);
  expect(res.json.error.form).toStrictEqual([
    {
      code: 'unrecognized_keys',
      message: "Unrecognized key(s) in object: 'random'",
      path: [],
    },
  ]);
  expect(res.statusCode).toBe(400);
}

export async function shouldEnforceQueryParams<TPath extends APIPaths>(
  client: ApiClient,
  path: TPath,
  method: keyof API[TPath]
) {
  const { token } = await seedSimpleUser();
  const res: Awaited<ReturnType<ApiClient['get']>> = await client[
    (method as string).toLowerCase()
  ](path as any, {
    token,
    qp: {},
  });

  isValidationError(res.json);
  expect(res.json.error.form).toStrictEqual([]);
  expect(Object.keys(res.json.error.fields).length).toBeGreaterThan(0);
  expect(res.statusCode).toBe(400);
}

export async function shouldBeNotFound(
  res: Dispatcher.ResponseData & { json: any }
) {
  isError(res.json);
  expect(res.json).toStrictEqual({
    error: {
      code: '404_not_found',
    },
  });
  expect(res.statusCode).toBe(404);
}

export async function shouldNotAllowBody(
  res: Dispatcher.ResponseData & { json: any }
) {
  isValidationError(res.json);
  expect(res.json.error.form).toStrictEqual([
    {
      code: 'unrecognized_keys',
      message: "Unrecognized key(s) in object: 'random'",
      path: [],
    },
  ]);
  expect(res.statusCode).toBe(400);
}

export async function shouldEnforceBody<TPath extends APIPaths>(
  client: ApiClient,
  path: TPath,
  method: keyof API[TPath]
) {
  const { token } = await seedSimpleUser();
  const res: Awaited<ReturnType<ApiClient['get']>> = await client[
    (method as string).toLowerCase()
  ](path as any, {
    token,
    body: { wrong: 'body' },
  });

  isValidationError(res.json);
  expect(res.json.error.form).toStrictEqual([
    {
      code: 'unrecognized_keys',
      message: "Unrecognized key(s) in object: 'wrong'",
      path: [],
    },
  ]);
  expect(Object.keys(res.json.error.fields).length).toBeGreaterThan(0);
  expect(res.statusCode).toBe(400);
}

const dateReg = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;

expect.extend({
  toBeIsoDate: (received) => {
    if (!dateReg.test(received)) {
      return {
        message: () => `expected ${received} to be an ISO Date`,
        pass: false,
      };
    }
    return { pass: true, message: () => '' };
  },
});
