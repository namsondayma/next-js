import React, { useEffect, useState } from 'react';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
};

const Page = async () => {
  // Lấy dữ liệu bằng SSR
  const initialPosts = await fetchPosts();

  const [posts, setPosts] = useState(initialPosts);

  const handleRefresh = async () => {
    const refreshedPosts = await fetchPosts();
    setPosts(refreshedPosts);
  };

  return (
    <div>
      <h1>Danh sách Bài viết với Refresh</h1>
      <button onClick={handleRefresh}>Refresh</button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;