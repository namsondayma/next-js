// pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Fetch products from the external API
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    // Return the products as a JSON response
    return res.status(200).json(products);
  } catch (error) {
    // Handle any errors that occur during the fetch
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
