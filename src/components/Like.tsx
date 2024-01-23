import React from 'react';

interface Props {
  id: string;
  likes: number;
  onLikeClick: (id: string) => void;
}

export default function Like({ id, likes, onLikeClick }: Props) {
  return (
    <>
      <button type="button" onClick={() => onLikeClick(id)}>
        Like
      </button>
      <p>{likes} likes</p>
    </>
  );
}
