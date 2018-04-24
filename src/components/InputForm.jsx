import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

let CardInput = (props) => {
  const { handleSubmit } = props;
  console.log(props)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='cardInput'>Card:</label>
            <Field name='cardInput' component='input' type='text' placeholder='card name...' onChange={props.handleInput} value='value'/>
        </div>
      </form>
      <button id='add-card' onClick={console.log(props)}>Add</button>
    </div>
  )
}

CardInput = reduxForm({
  form: 'cardInput'
})(CardInput)

const selector = formValueSelector('cardInput')
CardInput = connect(
  state => {
    const targetCard = selector(state, 'cardInput')
    return {
      targetCard
    }
  }
)(CardInput)

export default CardInput