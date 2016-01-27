import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import * as actions from '../actions'

const formulasReducer = (state = {}, action) => {
  switch(action.type) {
    case actions.FORMULA.RESOLVED:
      return action.entities.formulas
    case actions.FORMULA.REJECTED:
      return state
    default:
      return state
  }
}

const resultReducer = (state = [], action) => {
  switch(action.type) {
    case actions.FORMULA.RESOLVED:
      return action.result
    case actions.FORMULA.REJECTED:
      return state
    default:
      return state
  }
}

const rootReducer = combineReducers({
  formulas: formulasReducer,
  result: resultReducer,
  form: formReducer,
})

export default rootReducer
