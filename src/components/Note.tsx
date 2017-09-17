import './Note.css';
import React from 'react';

interface NoteInterface {
  /**
   * Need to add this to comply with React JSX
   * @type {React.EventHandler<React.MouseEvent<HTMLElement>>}
   * @memberof NoteInterface
   */
  onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  /**
   * same as above
   * @type {string}
   * @memberof NoteInterface
   */
  className?: string;
}

const Note: React.SFC<NoteInterface> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

export default Note;
