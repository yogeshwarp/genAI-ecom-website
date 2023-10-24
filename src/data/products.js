// src/data/products.js

const products = [
  {
    id: 1,
    name: 'Basketball',
    description: 'Official NBA basketball.',
    price: 29.99,
    image: '/images/basketball.png',
    category: 'Sports Equipment',
  },
    {
      id: 18,
      name: 'Volleyball',
      description: 'Official volleyball used in international competitions.',
      price: 39.99,
      image: '/images/volleyball.png',
      category: 'Sports Equipment',
    },
    {
      id: 19,
      name: 'Tennis Racket',
      description: 'Professional-grade tennis racket.',
      price: 89.99,
      image: '/images/tennis-racket.png',
      category: 'Sports Equipment',
    },
    {
      id: 20,
      name: 'Baseball Bat',
      description: 'Official MLB baseball bat.',
      price: 49.99,
      image: '/images/baseball-bat.png',
      category: 'Sports Equipment',
    },
    {
      id: 21,
      name: 'Golf Club Set',
      description: 'Complete set of golf clubs for beginners.',
      price: 199.99,
      image: '/images/golf-club.png',
      category: 'Sports Equipment',
    },
    {
      id: 22,
      name: 'Hockey Stick',
      description: 'Professional-grade hockey stick.',
      price: 79.99,
      image: '/images/hockey-stick.png',
      category: 'Sports Equipment',
    },
    {
      id: 23,
      name: 'Snowboard',
      description: 'High-quality snowboard for all skill levels.',
      price: 299.99,
      image: '/images/snowboard.png',
      category: 'Sports Equipment',
    },
    {
      id: 24,
      name: 'Skateboard',
      description: 'Professional-grade skateboard for street and park skating.',
      price: 129.99,
      image: '/images/skateboard.png',
      category: 'Sports Equipment',
    },
    {
      id: 25,
      name: 'Surfboard',
      description: 'High-performance surfboard for experienced surfers.',
      price: 499.99,
      image: '/images/surfboard.png',
      category: 'Sports Equipment',
    },
    {
      id: 26,
      name: 'Boxing Gloves',
      description: 'Professional-grade boxing gloves for sparring and training.',
      price: 59.99,
      image: '/images/boxing-gloves.png',
      category: 'Sports Equipment',
    },
    {
      id: 27,
      name: 'MMA Gloves',
      description: 'Professional-grade MMA gloves for sparring and training.',
      price: 69.99,
      image: '/images/mma-gloves.png',
      category: 'Sports Equipment',
    },
    {
      id: 2,
    name: 'Soccer Ball',
    description: 'FIFA-approved soccer ball.',
    price: 19.99,
    image: '/images/soccer-ball.png',
    category: 'Sports Equipment',
  },
  // Add more products here...
];

// Generate 15 more products
// for (let id = 3; id <= 17; id++) {
//   products.push({
//     id,
//     name: `Product ${id}`,
//     description: `Description for Product ${id}`,
//     price: Math.floor(Math.random() * 100) + 10, // Generate random price between 10 and 100
//     image: `product${id}.png`, // Adjust this based on your image filenames
//     category: 'Other Category', // Adjust the category
//   });
// }

// Add 3 product categories
const categories = ['Clothing', 'Footwear', 'Accessories'];

export { products, categories };
