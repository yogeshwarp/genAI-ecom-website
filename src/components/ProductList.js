
// src/components/ProductList.js

import React from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';

const ProductList = () => {
  return (
    <div>
      <h1>Browse Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
