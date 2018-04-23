import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'redux';
import Main from '../router/router.js';

export default class MTGContainer extends React.Component {
  constructor() {
    super(); 
  }

  render() {
    return (
      <div>
        <h1>This is life</h1>
        <Main />
      </div>
    )
  }
}

