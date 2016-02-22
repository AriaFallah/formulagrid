import { take, put, fork, call } from 'redux-saga/effects'
import * as actions from '../actions'
import api from '../services/api'

// Create lifecycle of a promise
const createPromiseLifecycle = (base) => ({
  PENDING:  `${base}_PENDING`,
  RESOLVED: `${base}_RESOLVED`,
  REJECTED: `${base}_REJECTED`
})

function* handlePromise(action) {
  const lifecycle = createPromiseLifecycle(action.type)

  // Put out the fact the promise is pending
  yield put({ type: lifecycle.PENDING })

  // Try to resolve the promise
  try {
    const result = yield action.payload.promise
    yield put ({
      type: lifecycle.RESOLVED,
      payload: {
        ...result
      }
    })
  } catch(err) {
    yield put ({
      type: lifecycle.REJECTED,
      payload: {
        err
      }
    })
  }
}

function* apiCall() {
  while(true) {
    // Grab all actions with the API intention
    const { type, payload: { method, options } } = yield take((action) => action[actions.API])

    // Pass on the pending API call to the promise handler
    yield fork(handlePromise, {
      type,
      payload: {
        promise: call(api[method], options)
      }
    })
  }
}

export default function* root(getState) {
  yield fork(apiCall)
}
