import React from 'react';
import Like from './Like';

interface Props {
  post: {
    body: string;
    likes: number;
    id: string;
  };
  onLikeClick: (id: string) => void;
}

export default function PostList({ post, onLikeClick }: Props) {
  return (
    <li>
      {/* <h3>UserName</h3> */}
      <p>{post.body}</p>
      <Like likes={post.likes} id={post.id} onLikeClick={onLikeClick} />
    </li>
  );
}
