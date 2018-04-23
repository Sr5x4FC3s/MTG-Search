import React from 'react';
import ReactDOM from 'react-dom';
import MTGContainer from './containers/App.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <MTGContainer />
  </BrowserRouter>, document.getElementById('app'));