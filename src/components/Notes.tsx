import React from 'react';
import Note from './Note';

// tslint:disable-next-line:variable-name
export default ({
  notes,
  onDelete = () => undefined
}: {
  notes: NoteModel[];
  onDelete: (id: string, event: Event) => void
}) => (
  <ul>
    {notes.map(({ id, task }) => (
      <li key={id}>
        <Note onDelete={onDelete.bind(null, id)} task={task} />
      </li>
    ))}
  </ul>
);
