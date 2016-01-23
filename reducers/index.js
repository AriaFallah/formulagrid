import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import intialState from './data';
import { ADD_FORMULA } from '../actions/formula';

const { entities: { formulas }, result } = intialState

function formulasReducer(state = formulas, action) {
  switch(action.type) {
    case ADD_FORMULA:
      return {
        ...state,
        [action.id]: {
          ...action.formula
        }
      }
    default:
      return state;
  }
}

function resultReducer(state = result, action) {
  switch (action.type) {
    case ADD_FORMULA:
      return [...state, action.id]
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  formulas: formulasReducer,
  result: resultReducer,
  form: formReducer,
});

export default rootReducer;
