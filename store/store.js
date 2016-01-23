import { createStore, applyMiddleware } from 'redux';
import normalizrMiddleware from 'redux-normalizr-middleware';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';

export const store = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware,
  normalizrMiddleware
)(createStore)(reducer, {});
