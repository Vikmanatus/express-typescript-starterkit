//  import http from 'http';
import expressApp from './app';
import { PORT } from './config';
import https from 'https';

/**
 * The dev SSL certificate will not be required in production
 * As the app will be deployed to Google Cloud App Engine, the SSL certificate will be managed automatically in production
 */
// const devOptions =
//   NODE_ENV === 'development'
//     ? {
//         key: fs.readFileSync('./certs/dev-key.pem'),
//         cert: fs.readFileSync('./certs/cert.pem'),
//       }
//     : {};
/**
 * Creating HTTP server
 */
// const server = https.createServer(devOptions, expressApp);

const server = https.createServer(expressApp)

server.listen(PORT, () => {
  console.log("Debugging port: ", process.env.PORT);
  console.log(`Server listening on port ${PORT}`);
});

