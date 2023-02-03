import type { FastifyPluginAsync } from 'fastify';

import components from './v0/components';
import documents from './v0/documents';
import getMe from './v0/me/get';
import orgs from './v0/orgs';
import perms from './v0/perms';
import projects from './v0/projects';

export const routes: FastifyPluginAsync = async (f) => {
  f.register(components, { prefix: '/0' });
  f.register(documents, { prefix: '/0' });
  f.register(getMe, { prefix: '/0' });
  f.register(orgs, { prefix: '/0' });
  f.register(perms, { prefix: '/0' });
  f.register(projects, { prefix: '/0' });

  f.get('/', async function () {
    return { root: true };
  });
};