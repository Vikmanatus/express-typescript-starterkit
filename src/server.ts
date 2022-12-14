import https from 'https';
import fs from 'fs';
import expressApp from './app';
import { API_URL, NODE_ENV, PORT } from './config';

const options = {
  key: fs.readFileSync('./certs/dev-key.pem'),
  cert: fs.readFileSync('./certs/cert.pem'),
};

/**
 * The dev SSL certificate will not be required in production
 * As the app will be deployed to Google Cloud App Engine, the SSL certificate will be managed automatically in production
 */
const devOptions = NODE_ENV === "development" ? options : {};
/**
 * Creating HTTP server
 */
const server = https.createServer(devOptions, expressApp);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log('Server available on this URI: ', API_URL);
});
