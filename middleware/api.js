import { PROMISE } from './promise';
const API_ROOT = 'https://sizzling-heat-5193.firebaseio.com/';

function callApi({ endpoint, method, data }) {
  const url = API_ROOT + endpoint;
  switch(method) {
    case 'GET':
      return window.fetch(url);
    case 'POST':
      return window.fetch(url);
    case 'PUT':
      return window.fetch(url);
    case 'PATCH':
      return window.fetch(url);
    case 'DELETE':
      return window.fetch(url);
    default:
      return null;
  }
}

export const CALL_API = Symbol('Call API');
export default (store) => (next) => (action) => {
  const options = action[CALL_API];
  if (typeof options !== 'object') {
    return next(action);
  }
  const result = callApi(options);
  if (!result) return next(action);

  // Takes advantage of promise middleware
  if (!action[PROMISE]) action[PROMISE] = {};
  action[PROMISE].promise = result.then((response) => response.json());
  return next(action);
}
