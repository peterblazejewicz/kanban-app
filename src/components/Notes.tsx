import React from 'react';
import Note from './Note';

const Notes = ({
  notes,
  onDelete = () => undefined
}: {
  notes: NoteModel[];
  onDelete: (id: string, event: Event) => void;
}) => (
  <ul>
    {notes.map(({ id, task }) => (
      <li key={id}>
        <Note onDelete={onDelete.bind(null, id)} task={task} />
      </li>
    ))}
  </ul>
);
export default Notes;
