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
    const { promise, resolvedActions, rejectedActions } = action[PROMISE]
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
            ...resolvedActions
          })
        : dispatch({
            type: `${type}_${PENDING}`,
            [PROMISE]: {
              promise: result,
              resolvedActions,
              rejectedActions
            }
        }))
      .catch((error) =>
        dispatch({
          type: `${originalType}_${REJECTED}`,
          payload: error,
          ...rejectedActions
        }))
  };
}
