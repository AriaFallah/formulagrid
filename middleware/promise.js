const PENDING = 'PENDING';
const RESOLVED = 'RESOLVED';
const REJECTED = 'REJECTED';

export const PROMISE = Symbol('Promise');
export default ({ dispatch }) => {
  return next => action => {
    if (!action[PROMISE]) return next(action);

    const { type } = action;
    const { promise, resolvedActions, rejectedActions } = action[PROMISE];
    if (!promise || typeof promise.then !== 'function') {
      return next(action);
    }

    // Destroys the original action.
    // Might change in the future if other middleware need the promise
    next({ type: `${type}_${PENDING}` });

    promise
      .then((result) =>
        dispatch({
          type: `${type}_${RESOLVED}`,
          payload: result,
          ...resolvedActions
        }))
      .catch((error) =>
        dispatch({
          type: `${type}_${REJECTED}`,
          payload: error,
          ...rejectedActions
        }))
  };
}
