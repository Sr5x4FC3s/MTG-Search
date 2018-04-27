import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { targetCard, listCards } from './inputReducers.js';

export default combineReducers({
  targetCard, 
  listCards,
  form: formReducer
});