import { createStore, applyMiddleware, compose } from 'redux';
import parseMiddleware from '../middleware/parse-middleware'
import promiseMiddleware from '../middleware/promise';
import reducer from '../reducers';

const middleware = compose(
  applyMiddleware(
    parseMiddleware,
    promiseMiddleware,
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export const store = middleware(createStore)(reducer, {});
