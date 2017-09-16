import React from 'react';
import Note from './Note';

// tslint:disable-next-line:variable-name
class Notes extends React.Component<{ notes: NoteModel[] }> {
  render() {
    return (
      <ul>
        {this.props.notes.map(note => (
          <li key={note.id}>
            <Note task={note.task} />
          </li>
        ))}
      </ul>
    );
  }
}

export default Notes;
