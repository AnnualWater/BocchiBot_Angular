import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'BocchiBot',
    logoUrl: ''
  },
  oAuthConfig: {
    issuer: 'https://localhost:44332/',
    redirectUri: baseUrl,
    clientId: 'BocchiBot_App',
    responseType: 'code',
    scope: 'offline_access BocchiBot',
    requireHttps: true,
    // issuer: 'https://localhost:44332/',
    // redirectUri: baseUrl,
    // clientId: 'BocchiBot_App',
    // dummyClientSecret: '1q2w3e*',
    // scope: 'offline_access BocchiBot'

  },
  apis: {
    default: {
      url: 'https://localhost:44332',
      rootNamespace: 'BocchiBot'
    }
  }
} as Environment;
