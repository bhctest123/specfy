import type { FastifyPluginAsync } from 'fastify';

import create from './create.js';

const fn: FastifyPluginAsync = async (f) => {
  await f.register(create, { prefix: '/demo' });
};

export default fn;
