import React from 'react';
import './App.css';

import Notes from './Notes';
/* tslint:disable:no-console */
export default () => (
  <div>
    <button onClick={() => console.log('add note')}>+</button>
    <Notes />
  </div>
);
