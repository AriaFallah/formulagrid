import Parse from 'parse'
import { PROMISE } from './promise'
Parse.initialize("i0aPvQRmU9Cs94NMOkudjDIX67Y1X2dN4Aft502Q", "xtHn84kNOyGR3xvarcSvaTNoJWwK3NgBdumspbKW")

function parse({ parseClass, method, data }) {
  switch(method) {
    case 'GET':
      return new Parse.Query(parseClass).limit(50).find()
    case 'PUT':
    case 'POST':
      return parseClass.save(data)
    case 'DELETE':
    default:
      return null
  }
}

export const PARSE = Symbol('Parse')
export default (store) => (next) => (action) => {
  const options = action[PARSE]
  if (typeof options !== 'object') {
    return next(action)
  }

  const promise = parse(options)
  if (!promise) return next(action)

  // Takes advantage of promise middleware
  if (!action[PROMISE]) action[PROMISE] = {}

  // Parse promises are stupid -_-
  action[PROMISE].promise =
    new window.Promise((resolve, reject) => promise.then((data) => resolve(data), (err) => reject(err)))

  return next(action)
}
