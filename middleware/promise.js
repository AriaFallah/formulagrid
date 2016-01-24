const PENDING = 'PENDING';
const RESOLVED = 'RESOLVED';
const REJECTED = 'REJECTED';

export const PROMISE = Symbol('Promise');
export default ({ dispatch }) => {
  return next => action => {
    const { promise } = action[PROMISE];

    if (!promise || typeof promise.then !== 'function') {
      return next(action);
    }

    // The original action type
    const { type } = action;

    // The actions to commit after the promise resolves or rejects
    const { resolvedActions, rejectedActions } = promise;

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
