import { normalize, arrayOf } from 'normalizr';

export default function normalizrMiddleware() {
  return store => next => action => {
    const schema = action.meta && action.meta.schema;

    if (schema && action.payload && !action.error) {
      const normalized = normalize(action.payload, arrayOf(schema));
      action = { ...action, payload: normalized };
    }

    return next(action);
  }
}
