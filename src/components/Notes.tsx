import uuid from 'uuid';
import React from 'react';

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

export default () => (
  <ul>{notes.map(note => <li key={note.id}>{note.task}</li>)}</ul>
);
