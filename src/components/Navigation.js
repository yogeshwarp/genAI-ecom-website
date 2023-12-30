// src/components/Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import SignUp from './SignUp';

const Navigation = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

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
        {isAuthenticated ? (
          <li>
            {user.email} | <button onClick={handleLogin}>Logout</button>
          </li>
        ) : (
          <>
            <li>
              <button onClick={handleLogin}>Login</button>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
