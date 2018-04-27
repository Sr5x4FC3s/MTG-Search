import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { createCardList } from  '../../utility/utilityFunctions.js';

let CardInput = (props) => {
  const { handleSubmit, reset } = props;
  console.log('hello this is props the props',props)

  const entryToList = () => {
    let cardList = createCardList(props);

    props.addCardToList(cardList);
    console.log(props);
    reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='cardInput'>Card:</label>
            <Field name='cardInput' component='input' type='text' placeholder='card name...' onChange={props.handleInput} value='value'/>
        </div>
      </form>
      <button id='add-card' onClick={() => { entryToList() }}>Add</button>
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