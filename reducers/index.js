import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import formulas from './formulas';

const rootReducer = combineReducers({
  formulas,
  form: formReducer
});

export default rootReducer;
