// src/App.js

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AuthService from './services/AuthService';
import { useAuth0 } from '@auth0/auth0-react';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';
import SignUp from './components/SignUp';
import './App.css'; // Import the CSS file

function App() {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <BrowserRouter>
      <div className="App">
      <nav>
            <ul>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/cart" >Cart</Link>
              </li>
              <li>
                <Link to="/login" >Login</Link> {/* Add the Login link */}
              </li>
            </ul>
          </nav>
        <Routes>
          <Route
            path="/"
            element={<ProductList addToCart={addToCart} />}
          />
          <Route
            path="/products/:id"
            element={<ProductDetail addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
