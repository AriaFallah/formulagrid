import { createStore, applyMiddleware, compose } from 'redux';
import normalizrMiddleware from 'redux-normalizr-middleware';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';
import DevTools from '../containers/DevTools';

const middleware = compose(
  applyMiddleware(
    thunkMiddleware,
    promiseMiddleware(),
    normalizrMiddleware(),
  ),
  DevTools.instrument()
);

export const store = middleware(createStore)(reducer, {});
