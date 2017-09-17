import './Notes.css';
import Editable from './Editable';
import Note from './Note';
import React from 'react';

interface NotesInterface {
  notes: NoteModel[];
  onDelete?: (id: string, event: Event) => void;
  onEdit?: (id: string, task: string, event: Event) => void;
  onNoteClick?: (id: string, event: Event) => void;
}

const Notes: React.SFC<NotesInterface> = ({
  notes,
  onDelete = () => undefined,
  onEdit = () => undefined,
  onNoteClick = () => undefined,
}) => (
  <ul className="notes">
    {notes.map(({ id, editing, task }) => (
      <li key={id}>
        <Note className="note" onClick={onNoteClick.bind(null, id)}>
          <Editable
            className="editable"
            editing={editing}
            value={task}
            onEdit={onEdit.bind(null, id, task)}
          />
          <button className="delete" onClick={onDelete.bind(null, id)}>
            x
          </button>
        </Note>
      </li>
    ))}
  </ul>
);
export default Notes;
