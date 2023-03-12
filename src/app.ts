import express, { Request } from 'express';
import morgan from 'morgan';
import { NODE_ENV } from '@/config';
import helmet from 'helmet';
import { BasicJsonResponse, TypedResponse } from './types';

const app = express();

app.use(helmet({ xssFilter: true, hidePoweredBy: true }));

if (NODE_ENV === 'development') {
  /**
   * Used to display information about incoming HTTP requests in the terminal
   */
  app.use(morgan('dev'));
}

app.set('trust proxy', true);

/**
 * Authorizing parsing of JSON body and URL encoded requests
 */
app.use(express.json({ limit: '300kb' }));
app.use(express.urlencoded({ extended: true }));

/**
 * Root API home
 */
app.get('/', (_req: Request, res: TypedResponse<BasicJsonResponse>) => {
  return res.status(200).json({ message: 'Welcolme to express-typescript-starterkit', success: true });
});

/**
 * Used to redirect user's in case of unexisting URL
 */
app.use((_req, res: TypedResponse<BasicJsonResponse>) => {
  res.status(404).json({
    message: 'Page not founded',
    success: false,
  });
});

export default app;
