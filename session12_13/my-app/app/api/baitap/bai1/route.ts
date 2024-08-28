// pages/api/posts.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Post[]>) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await response.json();
  res.status(200).json(posts);
}
