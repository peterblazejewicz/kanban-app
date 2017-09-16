import './App.css';
import Notes from './Notes';
import React from 'react';
import uuid from 'uuid';

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

class App extends React.Component {
  render() {
    // tslint:disable:no-console
    return (
      <div>
        <button onClick={() => console.log('add note')}>+</button>
        <Notes notes={notes} />
      </div>
    );
    // tslint:enable:no-console
  }
}

export default App;
