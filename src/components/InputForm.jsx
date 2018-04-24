import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

let CardInput = (props) => {
  const { handleSubmit } = props;
  console.log(props)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='card-input'>Card:</label>
            <Field name='card-input' component='input' type='text' placeholder='card name...' onChange={props.handleInput} value='value'/>
        </div>
      </form>
      <button id='add-card' onClick={console.log(props)}>Add</button>
    </div>
  )
}

CardInput = reduxForm({
  form: 'cardInput'
})(CardInput)

export default CardInput