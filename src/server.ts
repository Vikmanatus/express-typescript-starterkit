import https from 'https';
import fs from 'fs';
import expressApp from './app';
import { API_URL, PORT } from './config';

const options = {
  key: fs.readFileSync('./certs/dev-key.pem'),
  cert: fs.readFileSync('./certs/cert.pem'),
};
/**
 * Creating HTTP server
 */
const server = https.createServer(options, expressApp);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log('Server available on this URI: ', API_URL);
});
