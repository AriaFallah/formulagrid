import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ADD_FORMULA, GET_FORMULAS, GET_FORMULA } from '../constants';

function formulasReducer(state = {}, action) {
  switch(action.type) {
    case ADD_FORMULA + '_RESOLVED':
      return {
        [action.payload]: {
          ...action.formula
        },
        ...state
      }
    case GET_FORMULA + '_RESOLVED':
      return {
        [action.id]: action.payload
      }
    case GET_FORMULA + '_REJECTED':
      return {
        [action.id]: null
      }
    case GET_FORMULAS + '_RESOLVED':
      return action.payload
    default:
      return state;
  }
}

function orderReducer(state = [], action) {
  switch (action.type) {
    case ADD_FORMULA + '_RESOLVED':
      return [action.payload, ...state]
    case GET_FORMULA + '_RESOLVED':
    case GET_FORMULA + '_REJECTED':
      return [action.id]
    case GET_FORMULAS + '_RESOLVED':
      return action.order;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  formulas: formulasReducer,
  order: orderReducer,
  form: formReducer,
});

export default rootReducer;
