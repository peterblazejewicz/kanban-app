import React from 'react';

const Note = ({
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
export default Note;
