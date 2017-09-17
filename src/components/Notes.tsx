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
        <Note>
          <span>{task}</span>
          <button onClick={onDelete.bind(null, id)}>x</button>
        </Note>
      </li>
    ))}
  </ul>
);
export default Notes;
