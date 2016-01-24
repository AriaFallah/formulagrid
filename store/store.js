import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import apiMiddleware from '../middleware/api';
import reducer from '../reducers';
import DevTools from '../containers/DevTools';

const middleware = compose(
  applyMiddleware(
    apiMiddleware,
    promiseMiddleware(),
  ),
  DevTools.instrument()
);

export const store = middleware(createStore)(reducer, {});
