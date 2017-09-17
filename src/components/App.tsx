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
        editing: false,
        id: uuid.v4(),
        task: 'Learn React',
      },
      {
        editing: false,
        id: uuid.v4(),
        task: 'Do laundry',
      },
    ],
  };

  @autobind
  activateNoteEdit(id: string, event: Event) {
    this.setState({
      notes: this.state.notes.map(note => {
        if (note.id === id) {
          note.editing = true;
        }
        return note;
      }),
    });
  }

  @autobind
  addNote() {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          editing: false,
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

  @autobind
  editNote(id: string, task: string, event: Event) {
    this.setState({
      notes: this.state.notes.map(note => {
        if (note.id === id) {
          note.editing = false;
          note.task = task;
        }
        return note;
      }),
    });
  }

  render() {
    const { notes } = this.state;
    return (
      <div>
        <button className="add-note" onClick={this.addNote}>
          +
        </button>
        <Notes
          notes={notes}
          onDelete={this.deleteNote}
          onNoteClick={this.activateNoteEdit}
          onEdit={this.editNote}
        />
      </div>
    );
  }
}

export default App;
