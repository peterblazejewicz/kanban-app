import './App.css';
import Notes from './Notes';
import React from 'react';
import uuid from 'uuid';
import autobind from 'autobind-decorator';

// tslint:disable-next-line:no-any
class App extends React.Component<any, any> {
  // tslint:disable-next-line:no-any
  constructor(props: any) {
    super(props);
    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ] as NoteModel[]
    };
  }

  @autobind
  addNote() {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id: uuid.v4(),
          task: 'New Task'
        } as NoteModel
      ]
    });
  }

  @autobind
  deleteNote(id: string, event: Event) {
    event.stopPropagation();
    this.setState({
      notes: this.state.notes.filter((note: NoteModel) => note.id !== id)
    });
  }

  render() {
    const { notes }: { notes: NoteModel[] } = this.state;
    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes notes={notes} onDelete={this.deleteNote} />
      </div>
    );
  }
}

export default App;
