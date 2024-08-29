import React from 'react';

const fetchPosts = async () => {
  // Giả lập lỗi bằng cách fetch từ một URL không tồn tại
  const response = await fetch('https://jsonplaceholder.typicode.com/nonexistent-url');
  
  if (!response.ok) {
    throw new Error('Do đường dẫn sai nên API không trả về dữ liệu.');
  }

  const data = await response.json();
  return data;
};

const Page = async () => {
  let posts;
  let errorMessage = '';

  try {
    posts = await fetchPosts();
  } catch (error) {
    errorMessage = error.message;
  }

  return (
    <div>
      <h1>Xử lý Lỗi với SSR</h1>
      {errorMessage ? (
        <p style={{ color: 'red' }}>{errorMessage}</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body.substring(0, 100)}...</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;