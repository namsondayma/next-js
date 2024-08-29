import React from 'react';
import { useParams } from 'next/navigation';

const fetchPost = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  return response.json();
};

const Page = async () => {
  const { id } = useParams(); // Lấy id từ URL params
  const post = await fetchPost(id);

  return (
    <div>
      <h1>Chi tiết Bài viết</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Page;