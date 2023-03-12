import { AUTHORIZED_ENDPOINTS, AUTHORIZED_ROLES, MATCH_ENDPOINTS, PermissionConfigType } from '@/types';
import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

export const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5000;
export const NODE_ENV: string = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';


/**
 * This object is used to configure our project
 * We define the URL of the endpoint, the authroized roles and the match URL passed
 */
export const permissionConfig: PermissionConfigType = {
  home: {
    url: AUTHORIZED_ENDPOINTS.API_ROOT_ENDPOINT,
    authorized_roles: [AUTHORIZED_ROLES.USER, AUTHORIZED_ROLES.ADMIN, AUTHORIZED_ROLES.SUPER_ADMIN],
    matchUrl: MATCH_ENDPOINTS.MATCH_API_ROOT_ENDPOINT,
  },
  authRoot: {
    url: AUTHORIZED_ENDPOINTS.API_ROOT_ENDPOINT,
    authorized_roles: [AUTHORIZED_ROLES.USER, AUTHORIZED_ROLES.ADMIN, AUTHORIZED_ROLES.SUPER_ADMIN],
    matchUrl: MATCH_ENDPOINTS.MATCH_AUTH_ROOT_ENDPOINT,
  },
};