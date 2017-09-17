import './App.css';
import autobind from 'autobind-decorator';
import Notes from './Notes';
import React from 'react';
import uuid from 'uuid';

interface AppState {
  notes: NoteModel[];
}

class App extends React.Component<{}, AppState> {
  state = {
    notes: [
      {
        id: uuid.v4(),
        task: 'Learn React',
      },
      {
        id: uuid.v4(),
        task: 'Do laundry',
      },
    ],
  };

  @autobind
  addNote() {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id: uuid.v4(),
          task: 'New Task',
        },
      ],
    });
  }

  @autobind
  deleteNote(id: string, event: Event) {
    event.stopPropagation();
    this.setState({
      notes: this.state.notes.filter((note: NoteModel) => note.id !== id),
    });
  }

  render() {
    const { notes } = this.state;
    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes notes={notes} onDelete={this.deleteNote} />
      </div>
    );
  }
}

export default App;
