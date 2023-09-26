import { toApiMe } from '@specfy/models';

import type { GetMe } from '@specfy/models';

import { noQuery } from '../../../middlewares/noQuery.js';

import type { FastifyPluginCallback } from 'fastify';

const fn: FastifyPluginCallback = (fastify, _, done) => {
  fastify.get<GetMe>('/', { preHandler: [noQuery] }, async function (req, res) {
    const user = req.me!;

    return res.status(200).send({
      data: toApiMe(user, req.perms!),
    });
  });
  done();
};

export default fn;
