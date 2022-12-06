import express from 'express';
import morgan from 'morgan';
import { BasicJsonResponse, TypedResponse } from './types';

/**
 * Global express application
 */
const app = express();

/**
 * Used to display information about incoming HTTP requests in the terminal
 */
app.use(morgan('dev'));

/**
 * Authorizing parsing of JSON body and URL encoded requests
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
