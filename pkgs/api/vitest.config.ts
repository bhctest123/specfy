// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    // include: ['build/**/*.test.js'],
    include: ['src/**/*.test.ts'],
    globalSetup: 'src/test/vitest.global.ts',
    // setupFiles: 'src/test/vitest.each.ts',
    clearMocks: true,
    deps: {
      inline: ['@fastify/autoload'],
    },
    env: {
      DEFAULT_ACCOUNT: '',
    },
  },
  json: {
    // namedExports: true,
    // stringify: true,
  },
});
