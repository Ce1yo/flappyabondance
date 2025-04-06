console.log('Script starting...');

import express from 'express';
import http from 'http';

const app = express();
app.use(express.json());

// Route de test simple
app.get('/', (req, res) => {
  console.log('Root route hit');
  res.json({ message: 'Hello World' });
});

// Route de test
app.get('/test', (req, res) => {
  console.log('Test route hit');
  res.json({ message: 'Server is running!' });
});

const PORT = 3000;
const HOST = '127.0.0.1';

console.log(`About to start server on ${HOST}:${PORT}...`);

const server = http.createServer(app);

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
  console.log('Try these endpoints:');
  console.log(`curl http://${HOST}:${PORT}/`);
  console.log(`curl http://${HOST}:${PORT}/test`);
});
