import React from 'react';
import ReactDOM from 'react-dom';

import createApp from './App.js';

const App = createApp(React);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
