import React, { useState } from 'react';

interface Props {
  onSubmit: (body: string) => void;
}

export default function Form({ onSubmit }: Props) {
  const [body, setBody] = useState<string>('');

  const handleFormChange = (e: { currentTarget: { value: React.SetStateAction<string> } }) => {
    setBody(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(body);
    setBody('');
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        type="text"
        id="addForm"
        value={body}
        onChange={(e) => {
          handleFormChange(e);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}
