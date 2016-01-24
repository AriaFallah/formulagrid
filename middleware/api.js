const API_ROOT = 'https://sizzling-heat-5193.firebaseio.com/';
export const CALL_API = Symbol('Call API');

function callApi({ endpoint, method, data }) {
  const url = API_ROOT + endpoint;
  switch(method) {
    case 'GET':
      return window.fetch(url);
    case 'POST':
      return window.fetch(url);
    case 'PUT':
      return window.fetch(url);
    case 'DELETE':
      return window.fetch(url);
    default:
      return null;
  }
}

export default (store) => (next) => (action) => {
  const options = action[CALL_API];
  if (typeof options !== 'object') {
    return next(action);
  }
  const result = callApi(options);
  if (!result) return next(action);

  return next({
    ...action,
    payload: {
      promise: result.then((response) => response.json())
    }});
}
