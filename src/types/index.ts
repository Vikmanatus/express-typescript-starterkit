import { Request, Response } from 'express';

/**
 * This type will be used to override the body defined in the Express json() method
 */
export type SetTypedResponse<Type, T = Response> = (body?: Type) => T;

/**
 * This interface is used to type the body of the arguments passed in the Express json() method
 * Source: https://stackoverflow.com/questions/62736335/typescript-and-express-js-change-res-json-response-type
 */
export interface TypedResponse<Type> extends Response {
  json: SetTypedResponse<Type, this>;
}

export interface TypedRequestBody<Type> extends Request {
  body: Type;
}

/**
 * This interface represents the basic schema used in many requests where we don't need to send data
 */
export interface BasicJsonResponse {
  message: string;
  success: boolean;
}
