import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Form from './components/Form';
import PostList from './components/PostList';

function App() {
  interface Post {
    body: string;
    id: string;
    likes: number;
  }
  const [posts, setPosts] = useState<Post[]>([]);

  const handleFormSubmit = (body: string) => {
    setPosts((prevPosts) => [{ body, id: nanoid(), likes: 0 }, ...prevPosts]);
  };

  const handleLikeClick = (id: string) => {
    setPosts((prevPosts) => {
      const newPosts = prevPosts.map((post) => (post.id === id ? { ...post, likes: post.likes + 1 } : post));
      return newPosts;
    });
  };

  const postList = posts.map((post) => <PostList key={post.id} post={post} onLikeClick={handleLikeClick} />);

  return (
    <div className="container">
      <h1>List</h1>
      <Form onSubmit={handleFormSubmit} />
      <ul className="postList">{postList}</ul>
    </div>
  );
}

export default App;
