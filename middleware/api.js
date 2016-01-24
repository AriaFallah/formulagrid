const API_ROOT = 'https://sizzling-heat-5193.firebaseio.com/';

export const CALL_API = Symbol('Call API')

export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  const { endpoint, method, data, auth } = callAPI;
  switch(method) {
    case 'GET':
      return next({ ...action, payload: { promise: window.fetch(endpoint) } });
    case 'POST':
    case 'PUT':
    case 'DELETE':
    default:
      next(action);
  }
}
