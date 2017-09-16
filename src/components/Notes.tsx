import * as React from 'react';

interface Note {
  id: string;
  task: string;
}
const notes: Note[] = [
  {
    id: '4e81fc6e-bfb6-419b-93e5-0242fb6f3f6a',
    task: 'Learn React'
  },
  {
    id: '11bbffc8-5891-4b45-b9ea-5c99aadf870f',
    task: 'Do laundry'
  }
];

class Notes extends React.Component {
  render() {
    return <ul>{notes.map(note => <li key={note.id}>{note.task}</li>)}</ul>;
  }
}
export default Notes;
