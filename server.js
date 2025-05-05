const express = require('express');
const next = require('next');

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Your homepage route (points to src/app/page.jsx)
  server.get('/', (req, res) => {
    return app.render(req, res, '/');
  });

  // All other routes
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT || 3000);
});