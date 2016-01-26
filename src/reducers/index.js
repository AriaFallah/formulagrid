import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import * as actions from '../actions'

function formulasReducer(state = {}, action) {
  switch(action.type) {
    case actions.GET_FORMULA.RESOLVED:
      return {}
    case actions.GET_FORMULA.REJECTED:
      return {}
    default:
      return state
  }
}

const rootReducer = combineReducers({
  formulas: formulasReducer,
  form: formReducer,
})

export default rootReducer
