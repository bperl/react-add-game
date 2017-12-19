// console.log('Hello JS!!!!')
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

// These lines will not work in the browser
// const React = require('react')
// const ReactDOM = require('react-dom')

import App from '../components/App';
import store from '../store/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
</Provider>,
  document.getElementById('root'),
);
