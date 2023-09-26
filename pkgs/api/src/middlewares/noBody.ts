import { z } from 'zod';

import type { PreHandler } from '@specfy/models/src/fastify';

import { validationError } from '../common/errors.js';

export const noBody: PreHandler = async (req, res) => {
  if (!req.body) {
    return;
  }

  const val = z.object({}).strict().safeParse(req.body);
  if (!val.success) {
    return validationError(res, val.error);
  }
};
