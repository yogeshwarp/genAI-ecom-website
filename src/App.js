// src/App.js

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthService from './services/AuthService';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';
import SignUp from './components/SignUp';
import Chatbot from './components/Chatbot';
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

    <AuthService>
    <BrowserRouter>
      <div className="App">
      <Navigation />
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
        <Chatbot />
      </div>
    </BrowserRouter>
    </AuthService>
  );
}

export default App;
