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

const getFormula = handleParse.bind(null, actions.formulaHandler, api.getFormula)

function* formula() {
  while (true) {
    const action = yield take(actions.GET_FORMULA)
    yield call(getFormula)
  }
}

export default function* root(getState) {
  yield fork(formula)
}
