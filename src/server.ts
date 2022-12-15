import https from 'https';
import fs from 'fs';
import expressApp from './app';
import { NODE_ENV, PORT } from './config';

/**
 * The dev SSL certificate will not be required in production
 * As the app will be deployed to Google Cloud App Engine, the SSL certificate will be managed automatically in production
 */
const devOptions =
  NODE_ENV === 'development'
    ? {
        key: fs.readFileSync('./certs/dev-key.pem'),
        cert: fs.readFileSync('./certs/cert.pem'),
      }
    : {};
/**
 * Creating HTTP server
 */
const server = https.createServer(devOptions, expressApp);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

process.on('exit', function (code) {
  console.log('About to exit with code:', code);
});
