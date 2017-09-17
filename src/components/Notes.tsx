import Note from './Note';
import React from 'react';

interface NotesInterface {
  notes: NoteModel[];
  onDelete: (id: string, event: Event) => void;
}

const Notes: React.SFC<NotesInterface> = ({
  notes,
  onDelete = () => undefined,
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
