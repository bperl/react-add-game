// console.log('Hello JS!!!!')
import React from 'react';
import ReactDOM from 'react-dom';

// These lines will not work in the browser
// const React = require('react')
// const ReactDOM = require('react-dom')

import App from '../components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
