import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

let CardInput = (props) => {
  const { handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='card-input'>Card:</label>
            <Field name='card-input' component='input' type='text' placeholder='card name...' value='value'/>
        </div>
      </form>
      <button id='add-card'>Add</button>
    </div>
  )
}

CardInput = reduxForm({
  form: 'card-input'
})(CardInput)

export default CardInput