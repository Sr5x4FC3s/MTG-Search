import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { targetCard } from './inputReducers.js';

export default combineReducers({
  targetCard, 
  form: formReducer
});