const PENDING = 'PENDING'
const RESOLVED = 'RESOLVED'
const REJECTED = 'REJECTED'

function isPromise(promise) {
  return promise && typeof promise.then === 'function'
}

export const PROMISE = Symbol('Promise')
export default ({ dispatch }) => {
  return next => action => {
    if (!action[PROMISE]) return next(action)

    let { type } = action
    const { promise, resolvedAction, rejectedAction } = action[PROMISE]
    if (!isPromise(promise)) {
      return next(action)
    }

    // Preserve type in case of promise chaining
    const originalType = action[PROMISE].originalType || type
    type = `${type}_${PENDING}`

    // Destroys the original action.
    // Might change in the future if other middleware need the promise
    next({ type })
    promise
      .then((result) => !isPromise(result)
        ? dispatch({
            type: `${originalType}_${RESOLVED}`,
            payload: result,
            ...resolvedAction
          })
        : dispatch({
            type: `${type}_${PENDING}`,
            [PROMISE]: {
              promise: result,
              resolvedAction,
              rejectedAction
            }
        }))
      .catch((error) =>
        dispatch({
          type: `${originalType}_${REJECTED}`,
          payload: error,
          ...rejectedAction
        }))
  };
}
