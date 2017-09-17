import React from 'react';

interface NoteInterface {
  /**
   * Need to add this to comply with React JSX
   * @type {React.EventHandler<React.MouseEvent<HTMLElement>>}
   * @memberof NoteInterface
   */
  onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
}

const Note: React.SFC<NoteInterface> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

export default Note;
