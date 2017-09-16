import * as React from 'react';
import * as uuid from 'uuid';

interface Note {
  id: string;
  task: string;
}
const notes: Note[] = [
  {
    id: uuid.v4(),
    task: 'Learn React'
  },
  {
    id: uuid.v4(),
    task: 'Do laundry'
  }
];

class Notes extends React.Component {
  render() {
    return <ul>{notes.map(note => <li key={note.id}>{note.task}</li>)}</ul>;
  }
}
export default Notes;
