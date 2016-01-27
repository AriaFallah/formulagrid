import { take, put, fork, call } from 'redux-saga'
import * as actions from '../actions'
import api from '../services/api'

function* handleParse(entity, apiFn, options) {
  yield put(entity.request(options))
  try {
    const response = yield call(apiFn, options)
    yield put(entity.resolved(response))
  } catch(err) {
    yield put(entity.rejected(err))
  }
}

const getFormula = handleParse.bind(null, actions.getFormulaHandler, api.getFormula)
const addFormula = handleParse.bind(null, actions.addFormulaHandler, api.addFormula)

function* formula() {
  while (true) {
    const action = yield take([actions.GET_FORMULA, actions.ADD_FORMULA])
    switch(action.type) {
      case actions.GET_FORMULA:
        yield call(getFormula, action.query)
        break;
      case actions.ADD_FORMULA:
        yield call(addFormula, action.formula)
        break;
    }
  }
}

export default function* root(getState) {
  yield fork(formula)
}
