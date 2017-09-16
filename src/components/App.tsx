import './App.css';
import Notes from './Notes';
import React from 'react';
import uuid from 'uuid';

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
      ] as Note[]
    };
    this.addNote = this.addNote.bind(this);
  }
  addNote() {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id: uuid.v4(),
          task: 'New Task'
        } as Note
      ]
    });
  }

  render() {
    const { notes } = this.state;
    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes notes={notes} />
      </div>
    );
  }
}

export default App;
