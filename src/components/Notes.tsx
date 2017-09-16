import './Note.ts';
import React from 'react';

// tslint:disable-next-line:variable-name
class Notes extends React.Component<{ notes: Note[] }> {
  render() {
    return (
      <ul>
        {this.props.notes.map(note => <li key={note.id}>{note.task}</li>)}
      </ul>
    );
  }
}

export default Notes;
