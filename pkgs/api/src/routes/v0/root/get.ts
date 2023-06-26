import type { FastifyPluginCallback } from 'fastify';

import { noQuery } from '../../../middlewares/noQuery.js';
import type { GetRoot } from '../../../types/api/root.js';

const fn: FastifyPluginCallback = async (fastify, _, done) => {
  fastify.get<GetRoot>(
    '/',
    { preHandler: [noQuery] },
    async function (_req, res) {
      res.status(200).send({
        root: true,
      });
    }
  );

  done();
};

export default fn;
