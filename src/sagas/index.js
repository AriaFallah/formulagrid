import { take, put, fork, call } from 'redux-saga'
import * as actions from '../actions'
import api from '../services/api'

// Create lifecycle of a promise
const createPromiseLifecycle = (base) => ({
  PENDING:  `${base}_PENDING`,
  RESOLVED: `${base}_RESOLVED`,
  REJECTED: `${base}_REJECTED`
})

function* doPromise(action) {
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

    // Pass on the pending API call to the promise saga
    yield fork(doPromise, {
      type,
      payload: {
        promise: call(api[method], options)
      }
    })
  }
}

function* promise() {
  while(true) {
    // Grab all actions with the PROMISE intention
    const action = yield take((action) => action[actions.PROMISE])
    yield fork(doPromise, action)
  }
}

export default function* root(getState) {
  yield fork(apiCall)
  yield fork(promise)
}
