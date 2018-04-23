import React from 'react';
import ReactDOM from 'react-dom';
import MTGContainer from './containers/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MTGContainer />
    </BrowserRouter>
  </Provider>, document.getElementById('app'));