import React from 'react';
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
type HomeProps = {
  posts: Post[];
};
const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <div>
      <h1>List of Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/posts');
  const posts: Post[] = await response.json();
  return {
    props: {
      posts,
    },
  };
};
export default Home;