import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ADD_FORMULA, GET_FORMULAS } from '../actions/formula';

function formulasReducer(state = {}, action) {
  switch(action.type) {
    case ADD_FORMULA:
      return {
        ...state,
        [action.id]: {
          ...action.formula
        }
      }
    case GET_FORMULAS + '_FULFILLED':
      return action.payload.entities.formulas;
    default:
      return state;
  }
}

function resultReducer(state = [], action) {
  switch (action.type) {
    case ADD_FORMULA:
      return [...state, action.id]
    case GET_FORMULAS + '_FULFILLED':
      return action.payload.result;
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
