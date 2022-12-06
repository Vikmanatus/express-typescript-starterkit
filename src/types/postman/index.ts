import { EventDefinition, FormParamDefinition, ItemDefinition } from 'postman-collection';

/**
 * This type represents the definition of our config object used to :
 * - define the different roles who are allowed to access the route
 * - the URL
 * - the match URL
 */
export type PermissionConfigType = {
  [key: string]: PermissionObjectType;
};

/**
 * This enum represents the different roles allowed for our role-authentification system
 */
export enum AUTHORIZED_ROLES {
  USER = 'user',
  ADMIN = 'admin',
  SUPER_ADMIN = 'super-admin',
}

/**
 * The endpoints passed to Express router function
 */
export enum AUTHORIZED_ENDPOINTS {
  API_ROOT_ENDPOINT = '/',
}

/**
 * This enum represents the different API endpoints decorators passes to express in app.ts file
 */
export enum ROUTER_ENDPOINTS {
  AUTH = '/api/auth',
}

/**
 * Thses URL's used to check if the user is allowed to access specific endpoint, they can also be useful to create the URL's
 * in our automated postman config file and be passed into Jest function's
 */
export enum MATCH_ENDPOINTS {
  MATCH_API_ROOT_ENDPOINT = AUTHORIZED_ENDPOINTS.API_ROOT_ENDPOINT,
  MATCH_AUTH_ROOT_ENDPOINT = ROUTER_ENDPOINTS.AUTH,
}
/**
 * This type defines the different values used in our permission config objects
 */
export type PermissionObjectType = {
  url: AUTHORIZED_ENDPOINTS;
  authorized_roles: AUTHORIZED_ROLES[];
  matchUrl: MATCH_ENDPOINTS;
};

/**
 * This interface extends the original permission config type and add's the required addition information for Postman collection file automatic configuration
 */
export interface PostmanConfigType extends PermissionConfigType {
  [key: string]: PostmanObjectConfigType;
}

/**
 * Define the required information for each element of the PostmanConfigType
 */
export type PostmanObjectConfigType = PermissionObjectType & PostmanAddtionalConfigObjectType;

/**
 * This type represent aditionnal information required for our Postman collection file automatic configuration
 */
export type PostmanAddtionalConfigObjectType = {
  isAuthRequired: boolean;
  requestInformation: PostmanRequestInformationType;
  requestName: string;
  event?: PostmanEventInterface[];
};
export enum POSTMAN_EVENTS {
  TEST = 'test',
}
export interface PostmanEventInterface extends EventDefinition {
  listen: POSTMAN_EVENTS;
  script: PostmanScriptsInterface;
}

export interface PostmanScriptsInterface {
  type: POSTMAN_SCRIPT_TYPES;
  exec: string[];
}
export enum POSTMAN_SCRIPT_TYPES {
  JS = 'text/javascript',
}
/**
 * Type used to define what request types and which postman form type string is required for the automatic postman collection configuration
 */

export interface PostmanRequestInformationType<T = unknown> {
  type: REQUEST_TYPES;
  postmanFormType: POSTMAN_FORM_TYPES;
  contentType?: CONTENT_TYPES;
  data?: T;
  authorizationClientInfo?: AuthorizationClientInformation;
}

/**
 * The different request types used
 */
export enum REQUEST_TYPES {
  POST = 'POST',
  PATCH = 'PATCH',
  GET = 'GET',
}

/**
 * This enum is used to configure automatically the postman collection file
 */
export enum POSTMAN_FORM_TYPES {
  RAW = 'raw',
  ENCODED = 'urlencoded',
  FILES = 'formdata',
  NONE = 'none',
  FILE = 'file',
}

/**
 * This enum represents the different content-type used for our Postman configuration file and our Jest test's
 */
export enum CONTENT_TYPES {
  JSON = 'application/json',
  FILES = 'multipart/form-data',
  URL_ENCODED = 'application/x-www-form-urlencoded',
  KEY = 'Content-Type',
}

export type AuthorizationClientInformation = {
  clientId: string;
  clientSecret: string;
};

export type DefaultUnkownObjectType = {
  [key: string]: unknown;
};

export interface OverridePostmanFormDataInterface extends FormParamDefinition {
  key: string;
  type: POSTMAN_FORM_TYPES;
  src: string;
}

/**
 * Interface added because of a definition issue of the ItemDefinition type in the postman-collection package
 *
 * Link of the issue: https://github.com/postmanlabs/postman-collection/issues/1256
 */
export interface OverridePostmanItemConfig extends ItemDefinition {
  event?: PostmanEventInterface[];
}

export type PostmanUrlEncodedObjectForm = {
  key: string;
  value: string;
};

export interface UploadMediaInterface {
  requestKey: string;
  relativeFilePath: string;
}
