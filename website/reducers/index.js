import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import * as actions from '../actions'

const formulasReducer = (state = {}, action) => {
  switch(action.type) {
    case `${actions.GET_FORMULA}_RESOLVED`:
      return action.payload.formulas
    case `${actions.GET_FORMULA}_REJECTED`:
      return state
    default:
      return state
  }
}

const resultReducer = (state = [], action) => {
  switch(action.type) {
    case `${actions.GET_FORMULA}_RESOLVED`:
      return action.payload.result
    case `${actions.GET_FORMULA}_REJECTED`:
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
