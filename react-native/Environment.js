const ENV = {
  dev: {
    apiUrl: 'http://localhost:44353',
    oAuthConfig: {
      issuer: 'http://localhost:44353',
      clientId: 'Demo_App',
      clientSecret: '1q2w3e*',
      scope: 'Demo',
    },
    localization: {
      defaultResourceName: 'Demo',
    },
  },
  prod: {
    apiUrl: 'http://localhost:44353',
    oAuthConfig: {
      issuer: 'http://localhost:44353',
      clientId: 'Demo_App',
      clientSecret: '1q2w3e*',
      scope: 'Demo',
    },
    localization: {
      defaultResourceName: 'Demo',
    },
  },
};

export const getEnvVars = () => {
  // eslint-disable-next-line no-undef
  return __DEV__ ? ENV.dev : ENV.prod;
};
