// src/services/AuthService.js

import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { auth0Config } from '../authConfig';

const AuthService = ({ children }) => {
  return (
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      redirectUri={auth0Config.redirectUri}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthService;
