import { createStore, applyMiddleware, compose } from 'redux';
import parseMiddleware from '../middleware/parse-middleware'
import orderMiddleware from '../middleware/ordering';
import promiseMiddleware from '../middleware/promise';
import reducer from '../reducers';

const middleware = compose(
  applyMiddleware(
    parseMiddleware,
    promiseMiddleware,
    orderMiddleware,
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export const store = middleware(createStore)(reducer, {});
