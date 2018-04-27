import React from 'react';
import ReactDOM from 'react-dom';
import CardInput from '../components/InputForm.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { change, reset } from 'redux-form';
import { listCards } from '../actions/inputActions.js';

class MTGForm extends React.Component {
  submit = (values) => {
    console.log(values);
  }
  render() {
    return (
      <div>
        <CardInput onSubmit={this.submit}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('this is the state ', state);
  return {
    list: state.listCards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCardToList: () => { (dispatch(listCards(array))) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardInput);