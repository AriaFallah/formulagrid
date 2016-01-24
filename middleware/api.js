import { PROMISE } from './promise';
const API_ROOT = 'https://sizzling-heat-5193.firebaseio.com/';

function callApi({ endpoint, method, data }) {
  const options = {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }
  const url = API_ROOT + endpoint
  switch(method) {
    case 'GET':
    case 'DELETE':
      return window.fetch(url, options)
    case 'POST':
    case 'PUT':
    case 'PATCH':
      return window.fetch(url, { ...options, body: JSON.stringify(data) })
    default:
      return null
  }
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

export const CALL_API = Symbol('Call API')
export default (store) => (next) => (action) => {
  const options = action[CALL_API]
  if (typeof options !== 'object') {
    return next(action)
  }
  const result = callApi(options)
  if (!result) return next(action)

  // Takes advantage of promise middleware
  if (!action[PROMISE]) action[PROMISE] = {}
  action[PROMISE].promise =
    result
      .then(checkStatus)
      .then(parseJSON)

  return next(action)
}
