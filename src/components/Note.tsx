import React from 'react';

const Note: React.SFC = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

export default Note;
