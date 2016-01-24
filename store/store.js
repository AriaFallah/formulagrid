import { createStore, applyMiddleware, compose } from 'redux';
import apiMiddleware from '../middleware/api';
import orderMiddleware from '../middleware/ordering';
import promiseMiddleware from '../middleware/promise';
import reducer from '../reducers';

const middleware = compose(
  applyMiddleware(
    apiMiddleware,
    promiseMiddleware,
    orderMiddleware,
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export const store = middleware(createStore)(reducer, {});
