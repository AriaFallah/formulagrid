import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ADD_FORMULA, GET_FORMULAS } from '../constants';

function formulasReducer(state = {}, action) {
  switch(action.type) {
    case ADD_FORMULA + '_RESOLVED':
      return {
        ...state,
        [action.payload]: {
          ...action.formula
        }
      }
    case GET_FORMULAS + '_RESOLVED':
      return action.payload;
    default:
      return state;
  }
}

function resultReducer(state = [], action) {
  switch (action.type) {
    case ADD_FORMULA + '_RESOLVED':
      return [...state, action.payload]
    case GET_FORMULAS + '_RESOLVED':
      return action.order;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  formulas: formulasReducer,
  order: resultReducer,
  form: formReducer,
});

export default rootReducer;
