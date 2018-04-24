import React from 'react';
import ReactDOM from 'react-dom';
import CardInput from '../components/InputForm.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { change, reset } from 'redux-form';
import { targetCard } from '../actions/inputActions.js';

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
  console.log(`this is state`, state);
  return {
    targetCard: state.card
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInput: (event) => { (dispatch(targetCard(event.target.value))) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MTGForm);