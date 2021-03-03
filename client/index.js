// import dotenv from 'dotenv';
// import dotenv from 'dotenv/config';
// import _ from './dotenv.js';
import React from 'react';
import { render } from 'react-dom';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.scss';
// dotenv.config();

render(
  <BrowserRouter >
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
