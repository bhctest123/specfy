import closeWithGrace from 'close-with-grace';
import Fastify from 'fastify';

import appService from './app';
// Require library to exit fastify process, gracefully (if possible)

// Instantiate Fastify with some config
const app = Fastify({
  logger: true,
});

// Register your application as a normal plugin.
app.register(appService);

// delay is the number of milliseconds for the graceful close to finish
const closeListeners = closeWithGrace(
  { delay: 500 },
  async function ({ err }: any) {
    if (err) {
      app.log.error(err);
    }
    await app.close();
  }
);

app.addHook('onClose', (_, done) => {
  closeListeners.uninstall();
  done();
});

// Start listening.
app.listen({ port: 3000 }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});