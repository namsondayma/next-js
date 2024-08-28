// pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
  const response = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await response.json();
  res.status(200).json(products);
}
