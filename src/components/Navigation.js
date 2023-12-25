// src/components/Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import SignUp from './SignUp';

const Navigation = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const handleLogin = () => {
    if (!isAuthenticated) {
      // If the user is not authenticated, trigger the login flow.
      loginWithRedirect();
    } else {
      // If the user is already authenticated, log them out.
      logout();
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <button onClick={handleLogin}>
            {isAuthenticated ? 'Logout' : 'Login'}
          </button>
        </li>
        <li>
            <SignUp />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
