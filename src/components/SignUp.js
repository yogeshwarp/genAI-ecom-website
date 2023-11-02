// src/components/SignUp.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignUp = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = () => {
    loginWithRedirect();
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
