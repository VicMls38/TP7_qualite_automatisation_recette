// handlers.js
import { http, HttpResponse } from 'msw';
import { generateProducts } from '../utils/generateProducts.js';

// comment: This file defines the mock API handlers for the product catalogue.
export const handlers = [
  http.get('/api/products', () => {
    console.log('Handling GET /api/products request');
    const products = generateProducts(42);
    return HttpResponse.json(products, { status: 200 });
  })
];
 