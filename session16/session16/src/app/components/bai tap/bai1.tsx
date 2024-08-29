import React from 'react';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

const Page = async () => {
  const posts = await fetchPosts();

  return (
    <div>
      <h1>Danh sách Bài viết</h1>
      <ul>
        {posts.map((post: { id: number; title: string; body: string }) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;