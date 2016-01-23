import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import normalizrMiddleware from '../middleware/normalizr';
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
