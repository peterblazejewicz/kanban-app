import React from 'react';

export default ({
  task,
  onDelete = () => undefined
}: {
  task: string;
  onDelete: () => void;
}) => (
  <div>
    <span>{task}</span>
    <button onClick={onDelete}>x</button>
  </div>
);
