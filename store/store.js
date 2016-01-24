import { createStore, applyMiddleware, compose } from 'redux';
import apiMiddleware from '../middleware/api';
import orderMiddleware from '../middleware/ordering';
import promiseMiddleware from '../middleware/promise';
import reducer from '../reducers';
import DevTools from '../containers/DevTools';

const middleware = compose(
  applyMiddleware(
    apiMiddleware,
    promiseMiddleware,
    orderMiddleware,
  ),
  DevTools.instrument()
);

export const store = middleware(createStore)(reducer, {});
