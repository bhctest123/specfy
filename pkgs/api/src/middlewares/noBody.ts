import { z } from 'zod';

import { validationError } from '../common/errors';
import type { PreHandler } from '../types/fastify';

export const noBody: PreHandler = (req, res, done) => {
  if (!req.body) {
    done();
    return;
  }
  const val = z.object({}).strict().safeParse(req.body);
  if (!val.success) {
    return validationError(res, val.error);
  }

  done();
};
