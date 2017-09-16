import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Perf from 'react-addons-perf';

if (process.env.NODE_ENV !== 'production') {
  Object.assign(React, {
    Perf: Perf,
  });
}

ReactDOM.render(<div>Hello world</div>, document.getElementById('app'));
