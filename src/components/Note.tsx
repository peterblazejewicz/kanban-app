import React from 'react';

interface NoteInterface {
  task: string;
  onDelete: () => {};
}

const Note: React.SFC<NoteInterface> = ({
  task,
  onDelete = () => undefined,
}) => (
  <div>
    <span>{task}</span>
    <button onClick={onDelete}>x</button>
  </div>
);

export default Note;
