import { Authenticator } from '@fastify/passport';
import fastifySession from '@fastify/secure-session';
import type { Users } from '@prisma/client';
import type { FastifyInstance } from 'fastify';

import { env } from '../../common/env';
import { unauthorized } from '../../common/errors';
import { prisma } from '../../db';

import { registerGithub } from './github';
import { registerJwt } from './jwt';
import { registerLocal } from './local';

const ALLOW_GUEST = [
  '/',
  '/0/auth/github',
  '/0/auth/github/cb',
  '/0/auth/local',
];
const COOKIE_SECRET = Buffer.from(env('COOKIE_SECRET')!, 'hex');

export const fastifyPassport = new Authenticator();

export function registerAuth(f: FastifyInstance) {
  f.register(fastifySession, {
    sessionName: 'session',
    cookieName: 'specfy-app-session',
    cookie: {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
    key: COOKIE_SECRET,
  });
  f.register(fastifyPassport.initialize());
  f.register(fastifyPassport.secureSession());

  // Cookie pre validation
  f.addHook('preValidation', async (req) => {
    let id = req.session.get('passport')?.id;

    if (!id && env('DEFAULT_ACCOUNT')) {
      // In dev we can auto-load the default user
      const tmp = await prisma.users.findUnique({
        where: { email: env('DEFAULT_ACCOUNT')! },
      });
      if (!tmp) {
        throw new Error('Missing default account');
      }
      id = tmp.id;
    }

    if (!id) {
      return;
    }

    const user = await prisma.users.findUnique({
      where: { id },
    });
    const perms = await prisma.perms.findMany({
      where: {
        userId: id,
      },
      include: { Org: true },
    });
    req.user = user!;
    req.perms = perms;
  });

  // JSON WEB TOKEN
  registerJwt(f, fastifyPassport);

  // LOCAL
  registerLocal(f, fastifyPassport);

  // GITHUB OAUTH
  if (env('GITHUB_CLIENT_ID')) {
    registerGithub(fastifyPassport);
  }

  fastifyPassport.registerUserSerializer(async (user: Users) => {
    console.log('on serialize');
    return { id: user.id };
  });

  // Deserializer will fetch the user from the database when a request with an id in the session arrives
  fastifyPassport.registerUserDeserializer(async (user: unknown) => {
    console.log('on deserialise');
    return user;
  });

  // Final check to see if we are connected
  f.addHook('preValidation', (req, res, done) => {
    if (req.user) {
      done();
      return;
    }

    if (ALLOW_GUEST.includes(req.routerPath)) {
      done();
      return;
    }

    unauthorized(res);
  });
}