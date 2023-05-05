import { Environment } from '@abp/ng.core';

const baseUrl = 'https://www.bocchibot.fun';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'BocchiBot',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://api.bocchibot.fun/',
    redirectUri: baseUrl,
    clientId: 'BocchiBot_App',
    responseType: 'code',
    scope: 'offline_access BocchiBot',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://api.bocchibot.fun',
      rootNamespace: 'BocchiBot',
    },
  },
} as Environment;
