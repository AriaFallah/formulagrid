import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import entities from './entities';

const rootReducer = combineReducers({
  entities,
  form: formReducer
});

export default rootReducer;
